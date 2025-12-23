# Web3 MCP Hub

[![MCP Servers](https://img.shields.io/badge/MCP_Servers-80+-blue?style=for-the-badge)](https://github.com/rudazy/web3-mcp-hub)
[![Blockchains](https://img.shields.io/badge/Blockchains-130+-green?style=for-the-badge)](https://github.com/rudazy/web3-mcp-hub)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge)](CONTRIBUTING.md)

**The definitive open-source registry of Model Context Protocol (MCP) servers for Web3, blockchain, and decentralized applications.**

> Making blockchain accessible to AI agents and developers

---

### Why This Exists

MCP servers are scattered across GitHub with no central Web3-focused directory. This hub solves that by:

-  **Curating** the best blockchain MCP servers in one place
-  **Categorizing** by ecosystem (EVM, Solana, Bitcoin, L2s, DeFi, NFTs)
-  **Providing** ready-to-use configuration examples
-  **Maintaining** quality standards and documentation

### Quick Links

| Resource | Description |
|----------|-------------|
| [ Getting Started](docs/getting-started.md) | Setup guide for beginners |
| [ Full Server List](docs/SERVERS.md) | Expanded directory with 80+ servers |
| [ Contributing](CONTRIBUTING.md) | Add new servers to the registry |

---


## Overview

Web3 MCP Hub is a comprehensive, community-maintained registry that aggregates all production-ready MCP servers across the blockchain ecosystem. Our mission is to provide developers and AI agents with unified access to Web3 infrastructure through standardized tooling.

**What is MCP?**

The [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) is an open standard developed by Anthropic that enables AI models to interact with external tools, APIs, and data sources in a structured, secure manner. MCP servers expose blockchain functionality to AI agents, allowing them to query on-chain data, execute transactions, and interact with decentralized protocols.

---

## Table of Contents

- [Quick Start](#quick-start)
- [Registry Categories](#registry-categories)
  - [Identity and Reputation](#identity-and-reputation)
  - [Multi-Chain Infrastructure](#multi-chain-infrastructure)
  - [EVM Networks](#evm-networks)
  - [Solana Ecosystem](#solana-ecosystem)
  - [Bitcoin and Lightning](#bitcoin-and-lightning)
  - [Layer 2 Solutions](#layer-2-solutions)
  - [Non-EVM Chains](#non-evm-chains)
  - [DeFi Protocols](#defi-protocols)
  - [NFT and Digital Assets](#nft-and-digital-assets)
  - [Data and Analytics](#data-and-analytics)
  - [Market Data](#market-data)
  - [Developer Tools](#developer-tools)
- [Installation Guide](#installation-guide)
- [Contributing](#contributing)
- [License](#license)

---

## Quick Start

### Prerequisites

- Node.js 18+ or Python 3.10+
- An MCP-compatible client (Claude Desktop, Cursor, Claude Code, etc.)
- API keys for specific services (where required)

### Basic Configuration

Add servers to your MCP client configuration:
```json
{
  "mcpServers": {
    "server-name": {
      "command": "npx",
      "args": ["-y", "@package/mcp-server"],
      "env": {
        "API_KEY": "your-api-key"
      }
    }
  }
}
```

---

## Registry Categories

### Identity and Reputation

Decentralized identity, reputation systems, and trust infrastructure.

| Server | Features | Repository |
|--------|----------|------------|
| **Intuition MCP** | Atoms, triples, knowledge graph queries, attestations, claims, identity resolution, on-chain reputation | [0xIntuition/intuition-mcp-server](https://github.com/0xIntuition/intuition-mcp-server) |
| **ENS MCP** | ENS name resolution, reverse lookups, domain records | [EVM MCP Server](https://github.com/mcpdotdirect/evm-mcp-server) |

**Intuition MCP Features:**
- Query atoms and triples from Intuition's decentralized knowledge graph
- Create and retrieve attestations
- Identity and claim resolution
- On-chain reputation data access
- Integration with Intuition Protocol on Base

**Configuration Example - Intuition MCP:**
```json
{
  "mcpServers": {
    "intuition": {
      "command": "npx",
      "args": ["-y", "@0xintuition/intuition-mcp-server"]
    }
  }
}
```

---

### Multi-Chain Infrastructure

Production-ready MCP servers providing unified access across multiple blockchain networks.

| Server | Networks | Features | Repository |
|--------|----------|----------|------------|
| **Web3 MCP** | Ethereum, Solana, Cardano, THORChain, XRP, TON, Bitcoin, Litecoin, Dogecoin | Multi-chain balances, transactions, swaps, staking | [strangelove-ventures/web3-mcp](https://github.com/strangelove-ventures/web3-mcp) |
| **Tatum Blockchain MCP** | 130+ networks | Blockchain data API, RPC gateway, NFT metadata, wallet portfolios | [tatumio/blockchain-mcp](https://github.com/tatumio/blockchain-mcp) |
| **GOAT SDK MCP** | Ethereum, Solana, Base, 200+ integrations | On-chain actions, smart contract interactions, token management | [goat-sdk/goat](https://github.com/goat-sdk/goat) |
| **Nodit MCP** | Ethereum, Base, Optimism, Arbitrum, Polygon, Aptos, Bitcoin, TRON, XRPL | Web3 Data APIs, node infrastructure, GraphQL indexing | [noditlabs/nodit-mcp-server](https://github.com/noditlabs/nodit-mcp-server) |
| **Pocket Network MCP** | 63+ networks | Natural language blockchain queries, ENS resolution, cross-chain comparisons | [pokt-network/mcp](https://github.com/pokt-network/mcp) |

**Configuration Example - Web3 MCP:**
```json
{
  "mcpServers": {
    "web3": {
      "command": "npx",
      "args": ["-y", "@strangelove-ventures/web3-mcp"],
      "env": {
        "ENABLE_ETHEREUM_TOOLS": "true",
        "ENABLE_SOLANA_TOOLS": "true",
        "ENABLE_BITCOIN_TOOLS": "true"
      }
    }
  }
}
```

---

### EVM Networks

Comprehensive tooling for Ethereum and all EVM-compatible blockchains.

| Server | Networks | Features | Repository |
|--------|----------|----------|------------|
| **EVM MCP Server** | 60+ EVM chains | Smart contracts, token transfers, ENS resolution, gas estimation | [mcpdotdirect/evm-mcp-server](https://github.com/mcpdotdirect/evm-mcp-server) |
| **Alchemy MCP** | Ethereum, Polygon, Arbitrum, Optimism, Base | Token prices, NFT ownership, transaction history, swaps | [alchemyplatform/alchemy-mcp-server](https://github.com/alchemyplatform/alchemy-mcp-server) |
| **Moralis MCP** | 100+ endpoints, multi-chain | Wallet analytics, DeFi positions, token metrics, NFT data | [MoralisWeb3/moralis-mcp-server](https://github.com/moralisweb3/moralis-mcp-server) |
| **Etherscan MCP** | Ethereum | Balance checking, transaction history, contract ABIs, gas prices, ENS | [crazyrabbitLTC/mcp-etherscan-server](https://github.com/crazyrabbitLTC/mcp-etherscan-server) |
| **Starknet MCP** | Starknet | Wallet operations, smart contracts, StarknetID resolution | [mcpdotdirect/starknet-mcp-server](https://github.com/mcpdotdirect/starknet-mcp-server) |

**Configuration Example - EVM MCP:**
```json
{
  "mcpServers": {
    "evm": {
      "command": "npx",
      "args": ["-y", "@mcpdotdirect/evm-mcp-server"]
    }
  }
}
```

---

### Solana Ecosystem

Specialized tooling for Solana blockchain and its DeFi ecosystem.

| Server | Features | Repository |
|--------|----------|------------|
| **Solana Agent Kit MCP** | 40+ Solana actions, SPL tokens, DeFi operations, NFT creation | [sendaifun/solana-agent-kit](https://github.com/sendaifun/solana-agent-kit) |
| **Aldrin Labs Solana MCP** | 21 RPC methods, account operations, staking, token management | [Aldrin Labs](https://www.pulsemcp.com/servers/aldrin-labs-solana) |
| **Solana Web3.js MCP** | Smart contract deployment, transactions, account management | [FrankGenGo/solana-web3js-mcp-server](https://github.com/FrankGenGo/solana-web3js-mcp-server) |
| **SolanaViz MCP** | Wallet analysis, price predictions, security assessment, visualizations | [FarseenSh/GOATsolana-mcp](https://github.com/FarseenSh/GOATsolana-mcp) |
| **Jupiter Limit Order MCP** | Limit orders, token swaps, price fetching | [sendaifun/awesome-solana-mcp-servers](https://github.com/sendaifun/awesome-solana-mcp-servers) |
| **Solana Wallet Security Scanner** | Security analysis, threat detection, program monitoring | [sendaifun/awesome-solana-mcp-servers](https://github.com/sendaifun/awesome-solana-mcp-servers) |
| **Solana DeFi Analytics MCP** | Wallet analytics, DeFi insights, strategy optimization | [sendaifun/awesome-solana-mcp-servers](https://github.com/sendaifun/awesome-solana-mcp-servers) |

**Configuration Example - Solana Agent Kit:**
```json
{
  "mcpServers": {
    "solana": {
      "command": "npx",
      "args": ["-y", "@sendaifun/solana-agent-kit-mcp"],
      "env": {
        "SOLANA_PRIVATE_KEY": "your-private-key",
        "SOLANA_RPC_URL": "your-rpc-url"
      }
    }
  }
}
```

---

### Bitcoin and Lightning

Native Bitcoin and Lightning Network integration for AI agents.

| Server | Features | Repository |
|--------|----------|------------|
| **Bitcoin MCP** | Key generation, address validation, transaction decoding, Lightning payments | [AbdelStark/bitcoin-mcp](https://github.com/AbdelStark/bitcoin-mcp) |
| **Lightning Network MCP** | Invoice payments, balance queries, BOLT11 decoding | [AbdelStark/lightning-mcp](https://github.com/AbdelStark/lightning-mcp) |
| **Ordiscan MCP** | Ordinals inscriptions, BRC-20 tokens, Runes, UTXO queries | [Calel33/ordiscan-mcp-v1](https://github.com/Calel33/ordiscan-mcp-v1) |
| **MCP Inscription** | Ordinal detection, inscription parsing, content display | [Laz1mov/mcp-inscription](https://github.com/Laz1mov/mcp-inscription) |
| **Zebedee ZBD MCP** | Lightning micropayments, rewards | [zebedeeio/zbd-mcp-server](https://github.com/zebedeeio/zbd-mcp-server) |

**Configuration Example - Bitcoin MCP:**
```json
{
  "mcpServers": {
    "bitcoin": {
      "command": "npx",
      "args": ["-y", "bitcoin-mcp@latest"],
      "env": {
        "LNBITS_URL": "your-lnbits-url",
        "LNBITS_API_KEY": "your-api-key"
      }
    }
  }
}
```

---

### Layer 2 Solutions

Optimized tooling for Ethereum Layer 2 networks.

| Server | Networks | Features | Repository |
|--------|----------|----------|------------|
| **EVM MCP Server** | Arbitrum, Optimism, Base, Polygon, zkSync | Full L2 support with unified interface | [mcpdotdirect/evm-mcp-server](https://github.com/mcpdotdirect/evm-mcp-server) |
| **Base USDC Transfer MCP** | Base | Gas-free USDC transfers via Coinbase MPC wallets | [magnetai/mcp-free-usdc-transfer](https://github.com/magnetai/mcp-free-usdc-transfer) |

---

### Non-EVM Chains

Support for alternative blockchain architectures.

| Server | Network | Features | Repository |
|--------|---------|----------|------------|
| **Cardano** (via Web3 MCP) | Cardano | ADA transfers, stake pools, UTxO queries | [strangelove-ventures/web3-mcp](https://github.com/strangelove-ventures/web3-mcp) |
| **TON MCP** (via Web3 MCP) | TON | Balance queries, transactions, memos | [strangelove-ventures/web3-mcp](https://github.com/strangelove-ventures/web3-mcp) |
| **XRP Ledger** (via Web3 MCP) | XRPL | XRP transfers, trustlines, transaction history | [strangelove-ventures/web3-mcp](https://github.com/strangelove-ventures/web3-mcp) |
| **THORChain** (via Web3 MCP) | THORChain | Cross-chain swaps, RUNE balances, pool info | [strangelove-ventures/web3-mcp](https://github.com/strangelove-ventures/web3-mcp) |
| **Ergo MCP** | Ergo | Transaction history, forensic analysis | [marctheshark3/ergo-mcp](https://github.com/marctheshark3/ergo-mcp) |
| **Cosmos SDK** (via Pocket MCP) | Cosmos chains | Multi-denom balances, staking, governance, IBC | [pokt-network/mcp](https://github.com/pokt-network/mcp) |

---

### DeFi Protocols

Direct integration with decentralized finance protocols.

| Server | Protocol | Features | Repository |
|--------|----------|----------|------------|
| **Aave MCP** | Aave V3 | Lending, borrowing, liquidations on Base | [Aave MCP](https://mcpmarket.com/server/aave) |
| **Uniswap Trader MCP** | Uniswap | Token swaps, price quotes | [kukapay/uniswap-trader](https://github.com/kukapay/uniswap-trader-mcp) |
| **Uniswap PoolSpy MCP** | Uniswap V3 | New pool tracking across 9 networks | [kukapay/uniswap-poolspy-mcp](https://github.com/kukapay/uniswap-poolspy-mcp) |

---

### NFT and Digital Assets

Comprehensive NFT marketplace and digital asset tooling.

| Server | Features | Repository |
|--------|----------|------------|
| **OpenSea MCP** | NFT marketplace data, collection analytics, token info, 20+ chains | [OpenSea MCP](https://docs.opensea.io/docs/mcp) |
| **Alchemy NFT MCP** | NFT ownership, metadata, transaction history | [alchemyplatform/alchemy-mcp-server](https://github.com/alchemyplatform/alchemy-mcp-server) |
| **Moralis NFT Tools** | NFT data, wallet holdings, collection analytics | [MoralisWeb3/moralis-mcp-server](https://github.com/moralisweb3/moralis-mcp-server) |

**Configuration Example - OpenSea MCP:**
```json
{
  "mcpServers": {
    "opensea": {
      "url": "https://mcp.opensea.io/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_ACCESS_TOKEN"
      }
    }
  }
}
```

---

### Data and Analytics

Blockchain data platforms and analytics infrastructure.

| Server | Features | Repository |
|--------|----------|------------|
| **Dune Analytics MCP** | Custom SQL queries, cached results, EVM and Solana data | [SAK1337/dune-mcp](https://github.com/SAK1337/dune-mcp) |
| **Dune + Blockscout MCP** | Combined analytics, multi-chain support, compound tools | [dennisonbertram/web3-stats-mcp](https://github.com/dennisonbertram/web3-stats-mcp) |
| **Heurist Mesh MCP** | On-chain analytics, token metrics, security insights | [heurist-network/heurist-mesh-mcp-server](https://github.com/heurist-network/heurist-mesh-mcp-server) |

**Configuration Example - Dune Analytics:**
```json
{
  "mcpServers": {
    "dune": {
      "command": "python",
      "args": ["-m", "mcp_server_dune"],
      "env": {
        "DUNE_API_KEY": "your-api-key"
      }
    }
  }
}
```

---

### Market Data

Real-time cryptocurrency pricing and market intelligence.

| Server | Features | Repository |
|--------|----------|------------|
| **CoinGecko MCP** | Token prices, market data | [Blockchain-MCPs/coingecko-mcp](https://github.com/Blockchain-MCPs/coingecko-mcp) |
| **CoinMarketCap MCP** | Real-time prices, market cap, volume | [anjor/coinmarket-mcp-server](https://github.com/anjor/coinmarket-mcp-server) |
| **CoinCap MCP** | Real-time market data (no API key required) | [QuantGeekDev/coincap-mcp](https://github.com/QuantGeekDev/coincap-mcp) |
| **CoinStats MCP** | Portfolio tracking, market data, news | [CoinStatsHQ/coinstats-mcp](https://github.com/CoinStatsHQ/coinstats-mcp) |
| **Hive Intelligence MCP** | Unified crypto, DeFi, Web3 analytics | [hive-intel/hive-crypto-mcp](https://github.com/hive-intel/hive-crypto-mcp) |

---

### Developer Tools

Infrastructure and tooling for blockchain developers.

| Server | Features | Repository |
|--------|----------|------------|
| **Chainstack Documentation MCP** | API references, deployment guides, protocol knowledge | [Chainstack](https://chainstack.com) |
| **QuickNode MCP** | Multi-chain RPC endpoints, development tools | [QuickNode](https://www.quicknode.com/guides/ai/solana-mcp-server) |

---

## Installation Guide

### Claude Desktop

1. Open Claude Desktop settings
2. Navigate to Developer > MCP Settings
3. Add server configuration to `claude_desktop_config.json`:

**macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`

**Windows:** `%APPDATA%\Claude\claude_desktop_config.json`
```json
{
  "mcpServers": {
    "intuition": {
      "command": "npx",
      "args": ["-y", "@0xintuition/intuition-mcp-server"]
    },
    "web3": {
      "command": "npx",
      "args": ["-y", "@strangelove-ventures/web3-mcp"],
      "env": {
        "ENABLE_ETHEREUM_TOOLS": "true"
      }
    }
  }
}
```

4. Restart Claude Desktop

### Cursor

Add to `~/.cursor/mcp.json`:
```json
{
  "mcpServers": {
    "evm": {
      "command": "npx",
      "args": ["-y", "@mcpdotdirect/evm-mcp-server"]
    }
  }
}
```

### Claude Code CLI
```bash
claude mcp add intuition npx @0xintuition/intuition-mcp-server
claude mcp add evm-server npx @mcpdotdirect/evm-mcp-server
claude mcp add web3-server npx @strangelove-ventures/web3-mcp
```

---

## Contributing

We welcome contributions from the community.

### Adding a New Server

1. Fork this repository
2. Add server to the appropriate category table
3. Include: Name, Features, Repository URL
4. Add configuration example if applicable
5. Submit pull request

### Quality Standards

All listed servers must:
- Be open source or have public documentation
- Provide functional MCP integration
- Include installation instructions
- Be actively maintained

---
## Related Resources

### Other MCP Registries

| Registry | Focus | Link |
|----------|-------|------|
| awesome-mcp-servers | General MCP servers | [github.com/wong2/awesome-mcp-servers](https://github.com/wong2/awesome-mcp-servers) |
| awesome-blockchain-mcps | Blockchain focused | [github.com/royyannick/awesome-blockchain-mcps](https://github.com/royyannick/awesome-blockchain-mcps) |
| awesome-web3-mcp-servers | Web3 servers | [github.com/demcp/awesome-web3-mcp-servers](https://github.com/demcp/awesome-web3-mcp-servers) |
| MCP Servers Directory | Searchable directory | [mcpservers.org](https://mcpservers.org) |

### Official Documentation

- [Model Context Protocol Specification](https://modelcontextprotocol.io)
- [Anthropic MCP Documentation](https://docs.anthropic.com/en/docs/mcp)
- [MCP GitHub Organization](https://github.com/modelcontextprotocol)

### Web3 Resources

- [Intuition Portal](https://portal.intuition.systems) - On-chain reputation
- [Alchemy Documentation](https://docs.alchemy.com) - Web3 development
- [Moralis Documentation](https://docs.moralis.io) - Web3 APIs

---

## Security

### Best Practices

- Never commit private keys to configuration files
- Use environment variables for sensitive data
- Audit server code before use
- Start with testnets for development
- Use hardware wallets for mainnet operations

---

## License

This registry is released under the [MIT License](LICENSE).

Individual MCP servers are licensed under their respective licenses.

---

## Acknowledgments

- [Anthropic](https://anthropic.com) - Model Context Protocol
- [Intuition](https://intuition.systems) - Trust infrastructure and knowledge graph
- [Strangelove Ventures](https://github.com/strangelove-ventures) - Web3 MCP
- [Tatum](https://tatum.io) - Multi-chain infrastructure
- [SendAI](https://github.com/sendaifun) - Solana tooling
- [MCP.direct](https://github.com/mcpdotdirect) - EVM tooling

---

**Maintained by the Web3 developer community.**