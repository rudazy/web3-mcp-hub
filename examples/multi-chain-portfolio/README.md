# Multi-Chain Portfolio Tracker

A practical example showing how to use multiple MCP servers together to track wallet balances across different blockchains.

---

## Overview

This example demonstrates querying a wallet's holdings across Ethereum, Solana, and Bitcoin using three MCP servers working together.

---

## Required Servers

| Server | Purpose | API Key |
|--------|---------|---------|
| EVM MCP | Ethereum, Polygon, Base, Arbitrum balances | No |
| Solana Agent Kit | Solana balances and tokens | No |
| Bitcoin MCP | Bitcoin balance | No |

---

## Configuration

Add this to your MCP client configuration file:

**Claude Desktop (Mac):** `~/Library/Application Support/Claude/claude_desktop_config.json`

**Claude Desktop (Windows):** `%APPDATA%\Claude\claude_desktop_config.json`

**Cursor:** `~/.cursor/mcp.json`
```json
{
  "mcpServers": {
    "evm": {
      "command": "npx",
      "args": ["-y", "evm-mcp-server"]
    },
    "solana": {
      "command": "npx",
      "args": ["-y", "@sendai/solana-agent-kit"]
    },
    "bitcoin": {
      "command": "npx",
      "args": ["-y", "bitcoin-mcp"]
    }
  }
}
```

---

## Example Queries

After setup, try these prompts with Claude:

### Basic Balance Check
```
What is the ETH balance of 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045?
```

### Multi-Chain Portfolio
```
I want to check my portfolio across chains. Here are my addresses:

Ethereum: 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045
Solana: 7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU
Bitcoin: bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh

Give me a summary of holdings on each chain.
```

### ENS Resolution
```
What tokens does vitalik.eth hold on Ethereum mainnet?
```

### Cross-Chain Comparison
```
Compare the gas fees right now on Ethereum, Polygon, and Arbitrum.
```

---

## Expected Output

When you ask for a multi-chain portfolio summary, Claude will:

1. Query the EVM MCP server for Ethereum balances
2. Query the Solana MCP server for SOL and SPL token balances
3. Query the Bitcoin MCP server for BTC balance
4. Combine results into a unified summary

Example response:
```
Portfolio Summary:

Ethereum (0xd8dA...6045):
- ETH: 1,234.56 ETH (~$2,469,120)
- USDC: 50,000 USDC
- UNI: 1,000 UNI

Solana (7xKX...sAsU):
- SOL: 500 SOL (~$45,000)
- USDC: 10,000 USDC

Bitcoin (bc1q...0wlh):
- BTC: 2.5 BTC (~$105,000)

Total Estimated Value: ~$2,679,120
```

---

## Troubleshooting

### Server not responding

Ensure Node.js v18+ is installed:
```bash
node --version
```

### Timeout errors

Some servers need 10-15 seconds to initialize. Restart your MCP client and wait before querying.

### Rate limits

If using public RPC endpoints, you may hit rate limits. Consider adding API keys for production use.

---

## Next Steps

- Add price feeds using CoinGecko MCP for accurate USD values
- Include NFT holdings using Alchemy or OpenSea MCP
- Track DeFi positions using Moralis MCP

---

## Related Servers

See the full registry at [Web3 MCP Hub](https://github.com/rudazy/web3-mcp-hub)