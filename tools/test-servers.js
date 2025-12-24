#!/usr/bin/env node

/**
 * Web3 MCP Hub - Server Testing Tool
 * 
 * Tests MCP servers listed in registry.json:
 * - Validates repository URLs exist
 * - Checks if npm/pip packages are published
 * - Generates health report
 * 
 * Usage: node tools/test-servers.js [options]
 * 
 * Options:
 *   --category <name>   Test only servers in specific category
 *   --id <id>           Test only a specific server by ID
 *   --verified-only     Test only verified servers
 *   --output <file>     Save report to JSON file
 */

const https = require('https');
const http = require('http');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  dim: '\x1b[2m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Parse command line arguments
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    category: null,
    id: null,
    verifiedOnly: false,
    output: null
  };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--category':
        options.category = args[++i];
        break;
      case '--id':
        options.id = args[++i];
        break;
      case '--verified-only':
        options.verifiedOnly = true;
        break;
      case '--output':
        options.output = args[++i];
        break;
      case '--help':
        console.log(`
Web3 MCP Hub - Server Testing Tool

Usage: node tools/test-servers.js [options]

Options:
  --category <name>   Test only servers in specific category
  --id <id>           Test only a specific server by ID
  --verified-only     Test only verified servers
  --output <file>     Save report to JSON file
  --help              Show this help message

Examples:
  node tools/test-servers.js
  node tools/test-servers.js --category evm
  node tools/test-servers.js --id intuition
  node tools/test-servers.js --verified-only --output report.json
`);
        process.exit(0);
    }
  }

  return options;
}

// Check if a URL is reachable
function checkUrl(url) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https') ? https : http;
    const timeout = 10000;

    const req = protocol.get(url, { timeout }, (res) => {
      resolve({
        success: res.statusCode >= 200 && res.statusCode < 400,
        statusCode: res.statusCode
      });
    });

    req.on('error', (err) => {
      resolve({ success: false, error: err.message });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({ success: false, error: 'timeout' });
    });
  });
}

// Check if npm package exists
function checkNpmPackage(packageName) {
  return new Promise((resolve) => {
    const url = `https://registry.npmjs.org/${encodeURIComponent(packageName)}`;
    
    https.get(url, { timeout: 10000 }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            const pkg = JSON.parse(data);
            resolve({
              exists: true,
              version: pkg['dist-tags']?.latest || 'unknown',
              description: pkg.description || ''
            });
          } catch {
            resolve({ exists: false, error: 'parse error' });
          }
        } else {
          resolve({ exists: false, statusCode: res.statusCode });
        }
      });
    }).on('error', (err) => {
      resolve({ exists: false, error: err.message });
    });
  });
}

// Check if pip package exists
function checkPipPackage(packageName) {
  return new Promise((resolve) => {
    const url = `https://pypi.org/pypi/${encodeURIComponent(packageName)}/json`;
    
    https.get(url, { timeout: 10000 }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            const pkg = JSON.parse(data);
            resolve({
              exists: true,
              version: pkg.info?.version || 'unknown',
              description: pkg.info?.summary || ''
            });
          } catch {
            resolve({ exists: false, error: 'parse error' });
          }
        } else {
          resolve({ exists: false, statusCode: res.statusCode });
        }
      });
    }).on('error', (err) => {
      resolve({ exists: false, error: err.message });
    });
  });
}

// Check GitHub repository
function checkGitHubRepo(repoUrl) {
  return new Promise((resolve) => {
    // Extract owner/repo from URL
    const match = repoUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    if (!match) {
      resolve({ exists: false, error: 'not a github url' });
      return;
    }

    const [, owner, repo] = match;
    const cleanRepo = repo.replace(/\.git$/, '');
    const apiUrl = `https://api.github.com/repos/${owner}/${cleanRepo}`;

    https.get(apiUrl, {
      timeout: 10000,
      headers: {
        'User-Agent': 'web3-mcp-hub-tester',
        'Accept': 'application/vnd.github.v3+json'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            const repoData = JSON.parse(data);
            resolve({
              exists: true,
              stars: repoData.stargazers_count,
              forks: repoData.forks_count,
              updatedAt: repoData.updated_at,
              archived: repoData.archived,
              description: repoData.description
            });
          } catch {
            resolve({ exists: false, error: 'parse error' });
          }
        } else if (res.statusCode === 404) {
          resolve({ exists: false, error: 'repo not found' });
        } else if (res.statusCode === 403) {
          resolve({ exists: 'rate-limited', error: 'github rate limit' });
        } else {
          resolve({ exists: false, statusCode: res.statusCode });
        }
      });
    }).on('error', (err) => {
      resolve({ exists: false, error: err.message });
    });
  });
}

// Test a single server
async function testServer(server) {
  const result = {
    id: server.id,
    name: server.name,
    category: server.category,
    verified: server.verified,
    tests: {
      repository: null,
      package: null
    },
    status: 'unknown',
    testedAt: new Date().toISOString()
  };

  // Test repository
  log(`  Checking repository...`, 'dim');
  if (server.repository) {
    if (server.repository.includes('github.com')) {
      result.tests.repository = await checkGitHubRepo(server.repository);
    } else {
      result.tests.repository = await checkUrl(server.repository);
    }
  } else {
    result.tests.repository = { exists: false, error: 'no repository url' };
  }

  // Test package
  if (server.package) {
    log(`  Checking package...`, 'dim');
    if (server.packageManager === 'pip') {
      result.tests.package = await checkPipPackage(server.package);
    } else {
      result.tests.package = await checkNpmPackage(server.package);
    }
  } else {
    result.tests.package = { exists: false, error: 'no package specified' };
  }

  // Determine overall status
  const repoOk = result.tests.repository?.exists === true;
  const pkgOk = result.tests.package?.exists === true;
  const noPkg = !server.package;

  if (repoOk && (pkgOk || noPkg)) {
    result.status = 'healthy';
  } else if (repoOk || pkgOk) {
    result.status = 'partial';
  } else {
    result.status = 'failing';
  }

  return result;
}

// Main function
async function main() {
  const options = parseArgs();

  // Load registry
  const registryPath = path.join(__dirname, '..', 'registry.json');
  if (!fs.existsSync(registryPath)) {
    log('Error: registry.json not found', 'red');
    process.exit(1);
  }

  const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  let servers = registry.servers;

  // Filter servers based on options
  if (options.category) {
    servers = servers.filter(s => s.category === options.category);
    log(`Filtering by category: ${options.category}`, 'blue');
  }

  if (options.id) {
    servers = servers.filter(s => s.id === options.id);
    log(`Filtering by ID: ${options.id}`, 'blue');
  }

  if (options.verifiedOnly) {
    servers = servers.filter(s => s.verified === true);
    log(`Filtering verified servers only`, 'blue');
  }

  if (servers.length === 0) {
    log('No servers match the filter criteria', 'yellow');
    process.exit(0);
  }

  log(`\nTesting ${servers.length} servers...\n`, 'blue');

  const results = [];
  const summary = {
    total: servers.length,
    healthy: 0,
    partial: 0,
    failing: 0,
    testedAt: new Date().toISOString()
  };

  for (let i = 0; i < servers.length; i++) {
    const server = servers[i];
    log(`[${i + 1}/${servers.length}] ${server.name}`, 'blue');

    const result = await testServer(server);
    results.push(result);

    // Update summary
    summary[result.status]++;

    // Display result
    const statusColor = result.status === 'healthy' ? 'green' : 
                        result.status === 'partial' ? 'yellow' : 'red';
    const statusIcon = result.status === 'healthy' ? '[OK]' : 
                       result.status === 'partial' ? '[WARN]' : '[FAIL]';
    log(`  ${statusIcon} ${result.status}`, statusColor);

    // Brief delay to avoid rate limiting
    await new Promise(r => setTimeout(r, 300));
  }

  // Print summary
  log(`\n${'='.repeat(50)}`, 'blue');
  log('SUMMARY', 'blue');
  log(`${'='.repeat(50)}`, 'blue');
  log(`Total:    ${summary.total}`);
  log(`Healthy:  ${summary.healthy}`, 'green');
  log(`Partial:  ${summary.partial}`, 'yellow');
  log(`Failing:  ${summary.failing}`, 'red');

  // Print failing servers
  const failing = results.filter(r => r.status === 'failing');
  if (failing.length > 0) {
    log(`\nFailing servers:`, 'red');
    failing.forEach(r => {
      log(`  - ${r.name} (${r.id})`, 'red');
      if (r.tests.repository?.error) {
        log(`    Repo: ${r.tests.repository.error}`, 'dim');
      }
      if (r.tests.package?.error) {
        log(`    Package: ${r.tests.package.error}`, 'dim');
      }
    });
  }

  // Save report if output specified
  if (options.output) {
    const report = {
      summary,
      results
    };
    fs.writeFileSync(options.output, JSON.stringify(report, null, 2));
    log(`\nReport saved to: ${options.output}`, 'blue');
  }

  // Exit with appropriate code
  process.exit(summary.failing > 0 ? 1 : 0);
}

main().catch(err => {
  log(`Error: ${err.message}`, 'red');
  process.exit(1);
});
