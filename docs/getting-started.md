# Getting Started with Web3 MCP Servers

This guide will help you set up and use Web3 MCP servers with Claude Desktop, Cursor, or other MCP-compatible clients.

## Prerequisites

Before you begin, ensure you have:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **An MCP Client** - Claude Desktop, Cursor, or Claude Code CLI
- **Basic terminal knowledge**

## Quick Start (5 minutes)

### Step 1: Choose Your MCP Client

| Client | Best For | Config Location |
|--------|----------|-----------------|
| Claude Desktop | General use | `~/Library/Application Support/Claude/claude_desktop_config.json` (Mac) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows) |
| Cursor | Developers | `~/.cursor/mcp.json` |
| Claude Code CLI | Terminal users | Run `claude mcp add <server>` |

### Step 2: Pick a Server to Start

**Recommended first server:** [EVM MCP Server](https://github.com/mcpdotdirect/evm-mcp-server)

Why? No API key required, supports 60+ chains, easy setup.

### Step 3: Add Configuration

**For Claude Desktop / Cursor:**

Create or edit your config file and add:
```json
{
  "mcpServers": {
    "evm": {
      "command": "npx",
      "args": ["-y", "evm-mcp-server"]
    }
  }
}
```

**For Claude Code CLI:**
```bash
claude mcp add evm-mcp-server
```

### Step 4: Restart Your Client

Close and reopen Claude Desktop or Cursor. The server should now be available.

### Step 5: Test It

Try asking Claude:

> "What's the ETH balance of vitalik.eth?"

If you get a response with balance data, you're set up correctly!

---

## Adding Multiple Servers

You can run multiple MCP servers simultaneously:
```json
{
  "mcpServers": {
    "evm": {
      "command": "npx",
      "args": ["-y", "evm-mcp-server"]
    },
    "intuition": {
      "command": "npx",
      "args": ["-y", "@0xintuition/intuition-mcp-server"]
    },
    "solana": {
      "command": "npx",
      "args": ["-y", "solana-mcp-server"]
    }
  }
}
```

---

## Servers by Use Case

### I want to check wallet balances across chains
**Use:** [Web3 MCP](https://github.com/strangelove-ventures/web3-mcp) or [Tatum MCP](https://github.com/tatumio/blockchain-mcp)

### I want to interact with DeFi protocols
**Use:** [GOAT SDK MCP](https://github.com/goat-sdk/goat) or [Aave MCP](https://mcpmarket.com/server/aave)

### I want to work with NFTs
**Use:** [OpenSea MCP](https://docs.opensea.io/docs/mcp) or [Alchemy MCP](https://github.com/alchemyplatform/alchemy-mcp-server)

### I want on-chain reputation and identity
**Use:** [Intuition MCP](https://github.com/0xIntuition/intuition-mcp-server)

### I want Solana-specific tools
**Use:** [Solana Agent Kit MCP](https://github.com/sendaifun/solana-agent-kit)

### I want Bitcoin and Lightning
**Use:** [Bitcoin MCP](https://github.com/AbdelStark/bitcoin-mcp)

---

## API Keys

Some servers require API keys. Here's how to add them:
```json
{
  "mcpServers": {
    "alchemy": {
      "command": "npx",
      "args": ["-y", "@alchemy/mcp-server"],
      "env": {
        "ALCHEMY_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

**Free API keys available from:**
- [Alchemy](https://www.alchemy.com/) - Generous free tier
- [Moralis](https://moralis.io/) - 25k requests/month free
- [Tatum](https://tatum.io/) - Free tier available
- [Etherscan](https://etherscan.io/apis) - 5 calls/sec free

---

## Troubleshooting

### Server not appearing in Claude

1. Check your config file syntax (valid JSON?)
2. Restart Claude Desktop completely
3. Check if Node.js is installed: `node --version`

### "Command not found" error

Run manually to debug:
```bash
npx -y evm-mcp-server
```

### Timeout errors

Some servers need time to initialize. Wait 10-15 seconds after restart.

### API key errors

Double-check:
- Key is correct (no extra spaces)
- Key has required permissions
- You're not hitting rate limits

---

## Next Steps

1. **Explore the [full server list](../README.md)** - Find servers for your use case
2. **Join the community** - Share what you build
3. **Contribute** - Found a new server? [Submit a PR](../CONTRIBUTING.md)

---

## Need Help?

- Open an [issue](https://github.com/rudazy/web3-mcp-hub/issues) on this repo
- Check [MCP Documentation](https://modelcontextprotocol.io)
- Ask in the MCP Discord community