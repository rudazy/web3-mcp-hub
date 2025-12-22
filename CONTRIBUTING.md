# Contributing to Web3 MCP Hub

Thank you for your interest in contributing to Web3 MCP Hub. This document provides guidelines for contributing to the registry.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
- [Adding a New MCP Server](#adding-a-new-mcp-server)
- [Updating Existing Entries](#updating-existing-entries)
- [Pull Request Process](#pull-request-process)
- [Quality Standards](#quality-standards)

---

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other community members

---

## How to Contribute

### Types of Contributions

1. **Adding new MCP servers** - Submit servers not yet listed
2. **Updating information** - Fix outdated links, descriptions, or features
3. **Improving documentation** - Enhance guides, examples, or explanations
4. **Reporting issues** - Flag broken links, deprecated servers, or inaccuracies
5. **Suggesting categories** - Propose new organizational structures

### Getting Started

1. Fork the repository
2. Create a feature branch: `git checkout -b add-server-name`
3. Make your changes
4. Commit with clear messages: `git commit -m "Add ServerName to Category"`
5. Push to your fork: `git push origin add-server-name`
6. Open a Pull Request

---

## Adding a New MCP Server

### Required Information

| Field | Required | Description |
|-------|----------|-------------|
| Name | Yes | Official server name |
| Repository | Yes | GitHub URL or official documentation |
| Networks | Yes | Supported blockchain networks |
| Features | Yes | Key capabilities (3-5 items) |
| Configuration | Recommended | Example JSON configuration |
| API Key Required | If applicable | Whether external API key is needed |
| License | Recommended | Open source license type |

### Entry Format

Add entries to the appropriate category table in README.md:
````markdown
| **Server Name** | Network1, Network2 | Feature1, feature2, feature3 | [org/repo](https://github.com/org/repo) |
````

### Configuration Example Format
````markdown
**Configuration Example - Server Name:**
```json
{
  "mcpServers": {
    "server-id": {
      "command": "npx",
      "args": ["-y", "@package/server"],
      "env": {
        "API_KEY": "your-api-key"
      }
    }
  }
}
```

### Category Selection

| Category | Criteria |
|----------|----------|
| Identity and Reputation | DIDs, attestations, trust systems, ENS |
| Multi-Chain Infrastructure | Supports 3+ distinct blockchain networks |
| EVM Networks | Ethereum and EVM-compatible chains |
| Solana Ecosystem | Solana-specific tooling |
| Bitcoin and Lightning | Bitcoin, Lightning, Ordinals, BRC-20 |
| Layer 2 Solutions | Arbitrum, Optimism, Base, zkSync, Polygon |
| Non-EVM Chains | Cardano, Cosmos, TON, XRP, Aptos, etc. |
| DeFi Protocols | DEXs, lending, bridges, yield protocols |
| NFT and Digital Assets | NFT marketplaces, collections, metadata |
| Data and Analytics | Blockchain data platforms, indexers |
| Market Data | Pricing, market cap, trading data |
| Developer Tools | SDKs, documentation, testing, RPC providers |

---

## Updating Existing Entries

### When to Update

- Repository URL changes
- New features added
- Networks supported changes
- Project renamed or deprecated
- Configuration format changes

### Deprecation Process

If a server is no longer maintained:

1. Add `(Deprecated)` to the server name
2. Add note about alternatives if available
3. Keep entry for 3 months before removal
4. Document reason in commit message

---

## Pull Request Process

### Before Submitting

- [ ] Verify all links work
- [ ] Test configuration examples if possible
- [ ] Check for duplicate entries
- [ ] Follow the entry format
- [ ] Place in correct category

### PR Title Format
````
Add: ServerName to Category
Update: ServerName features/links
Remove: Deprecated ServerName
Fix: Broken link for ServerName
Docs: Improve installation guide