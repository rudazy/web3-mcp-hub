# Contributing to Web3 MCP Hub

Thank you for your interest in contributing to the Web3 MCP Hub. This document outlines the process for adding new servers and improving the registry.

---

## Ways to Contribute

- **Add new servers** - Submit MCP servers not yet listed
- **Fix errors** - Correct inaccurate information or broken links
- **Improve documentation** - Enhance explanations, examples, or tutorials
- **Test servers** - Verify functionality and document results
- **Suggest improvements** - Propose new features or organizational changes

---

## Adding a New Server

### Requirements

Before submitting, ensure the server:

1. Does not already exist in the registry (check README.md and docs/SERVERS.md)
2. Is Web3-related (interacts with blockchains, DeFi, NFTs, or cryptocurrency)
3. Has a public repository with documentation
4. Works with standard MCP clients (Claude Desktop, Cursor, or Claude Code CLI)

### Submission Template

When submitting a new server via Pull Request, include the following:
```
SERVER NAME:
CATEGORY: [Identity / Multi-Chain / EVM / Solana / Bitcoin / L2 / Non-EVM / DeFi / NFT / Analytics / Market Data / Developer Tools]
REPOSITORY URL:
DOCUMENTATION URL:
NETWORKS SUPPORTED:
API KEY REQUIRED: [Yes / No / Optional]
LICENSE:

KEY FEATURES:
- Feature 1
- Feature 2
- Feature 3

CONFIGURATION EXAMPLE:
{
  "mcpServers": {
    "server-name": {
      "command": "npx",
      "args": ["-y", "package-name"]
    }
  }
}

TESTING STATUS:
- [ ] Successfully installed
- [ ] Connected to MCP client
- [ ] Core features verified
- [ ] Documentation accurate

TESTED BY: @your-github-username
TEST DATE: YYYY-MM-DD
NOTES: [Any additional information]
```

---

## Server Quality Standards

All servers in this registry should meet these criteria:

| Criteria | Requirement |
|----------|-------------|
| Repository | Public and accessible |
| Documentation | Clear setup instructions |
| Maintenance | Updated within the last 12 months |
| Functionality | Core features work as described |
| Security | No known vulnerabilities or malicious code |

---

## Pull Request Process

1. Fork the repository
2. Create a branch: `git checkout -b add-server-name`
3. Add the server to the appropriate category in README.md
4. Add detailed entry to docs/SERVERS.md
5. Submit PR with completed submission template
6. Respond to review feedback

### Commit Message Format
```
Add [Server Name] to [Category]

- Networks: Ethereum, Polygon
- Features: balance queries, token transfers
- API key: required/not required
```

---

## Reporting Issues

### Broken or Deprecated Servers

If you find a server that no longer works:

1. Open an issue with the server name and repository URL
2. Describe what is broken (installation fails, features not working, etc.)
3. Include error messages if applicable

### Incorrect Information

If server details are inaccurate:

1. Open an issue or submit a PR with corrections
2. Provide source for correct information

---

## Code of Conduct

- Be respectful and constructive
- Focus on facts and technical accuracy
- Credit original authors appropriately
- No spam or self-promotion without value

---

## Questions

If you have questions about contributing, open an issue with the label `question`.

---

## License

By contributing, you agree that your contributions will be licensed under the MIT License.