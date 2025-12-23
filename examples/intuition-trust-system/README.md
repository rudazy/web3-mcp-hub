# Intuition Trust System

A practical example demonstrating how to use the Intuition MCP server for on-chain reputation, trust scoring, attestations, and expert discovery on Base.

---

## Overview

Intuition is a decentralized knowledge graph and reputation system on Base. This example shows how to leverage the MCP server for:

- Calculating aggregated trust scores
- Querying and filtering attestations
- Verifying credentials for addresses
- Discovering trusted experts by topic
- Building reputation-aware AI applications

---

## Required Server

| Server | Purpose | API Key |
|--------|---------|---------|
| Intuition MCP | Trust scores, attestations, credentials, expert discovery | No |

---

## Configuration

Add this to your MCP client configuration file:

**Claude Desktop (Mac):** `~/Library/Application Support/Claude/claude_desktop_config.json`

**Claude Desktop (Windows):** `%APPDATA%\Claude\claude_desktop_config.json`

**Cursor:** `~/.cursor/mcp.json`
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

## Available MCP Tools

The Intuition MCP server provides four core tools:

| Tool | Description |
|------|-------------|
| `getTrustScore(address)` | Get aggregated trust score for any address |
| `getAttestations(address, filters)` | Query attestations with flexible filtering |
| `verifyCredential(address, claim)` | Check if an address has a specific attestation |
| `findTrustedExperts(topic)` | Discover highly trusted addresses in a topic |

---

## Example Queries

After setup, try these prompts with Claude:

### Get Trust Score
```
What is the trust score for address 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045?
```

### Query Attestations
```
Get all attestations for 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045, filtered by the last 30 days.
```

### Verify Credentials
```
Verify if 0xabc... has been attested as a "developer" on Intuition.
```

### Find Trusted Experts
```
Find the most trusted experts in the topic "DeFi" on Intuition.
```

### Reputation Analysis
```
Give me a complete reputation profile for this address:
0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045

Include:
- Overall trust score
- Key attestations received
- Topics they are recognized for
- Who has attested to them
```

---

## Use Cases

### AI Hiring Assistant
```
I need to verify a candidate's blockchain credentials.

Address: 0xabc...

Check if they have attestations for:
- Solidity development
- Smart contract auditing
- Open source contributions

Provide a trust assessment.
```

### Trust-Gated Access
```
Should this address be granted access to our premium community?

Address: 0xdef...

Requirements:
- Trust score above 70
- At least 5 attestations
- Verified as "builder" or "developer"
```

### Expert Discovery
```
I'm building a DAO and need to find trusted governance participants.

Find experts in:
- Governance
- Tokenomics
- Community management

Return their addresses and trust scores.
```

### Reputation Tracking
```
Track reputation changes for these addresses over time:
- 0xabc...
- 0xdef...
- 0x123...

Show attestation history and trust score trends.
```

---

## Expected Output

### Trust Score Response
```
Trust Score for 0xd8dA...6045:

Overall Score: 87/100
Confidence: High (based on 156 attestations)

Breakdown:
- Attestations Received: 156
- Unique Attestors: 89
- Topics: Developer, Builder, Open Source, Ethereum
- Stake Weight: 45.2 ETH

Top Attestations:
1. "Ethereum Core Contributor" (23 attestors, 12.5 ETH staked)
2. "Trusted Developer" (45 attestors, 8.3 ETH staked)
3. "Open Source Maintainer" (31 attestors, 6.1 ETH staked)
```

### Expert Discovery Response
```
Trusted Experts in "DeFi":

1. 0xabc... - Trust Score: 92
   - 234 attestations
   - Key: "DeFi Protocol Developer", "Liquidity Expert"

2. 0xdef... - Trust Score: 88
   - 178 attestations
   - Key: "Yield Strategist", "Smart Contract Auditor"

3. 0x123... - Trust Score: 85
   - 145 attestations
   - Key: "DeFi Governance", "Tokenomics Expert"
```

---

## Intuition Network Details

| Parameter | Value |
|-----------|-------|
| Chain ID | 8453 (Base) |
| Explorer | https://explorer.intuition.systems |
| GraphQL API | https://graph.intuition.systems/graphql |
| Portal | https://portal.intuition.systems |

---

## Advanced: Combined Reputation Stack

For comprehensive reputation analysis, combine Intuition with other MCP servers:
```json
{
  "mcpServers": {
    "intuition": {
      "command": "npx",
      "args": ["-y", "@0xintuition/intuition-mcp-server"]
    },
    "evm": {
      "command": "npx",
      "args": ["-y", "evm-mcp-server"]
    },
    "ens": {
      "command": "npx",
      "args": ["-y", "evm-mcp-server"]
    }
  }
}
```

Combined query example:
```
For vitalik.eth, provide a complete Web3 identity profile:

1. Resolve ENS to address
2. Get Intuition trust score and attestations
3. Check on-chain activity and holdings
4. Summarize their reputation across the ecosystem
```

---

## Upcoming Features

The Intuition MCP server is being enhanced with advanced trust algorithms:

- EigenTrust algorithm for transitive trust computation
- AgentRank for agent-to-agent reputation scoring
- Configurable trust metrics and weighting
- Batch queries for multiple addresses
- Historical trust score tracking

Development repository: https://github.com/rudazy/Intuition-

Official repository: https://github.com/0xIntuition/intuition-mcp-server

---

## API Endpoints (Direct Access)

For developers building custom integrations:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/trust-score?address=0x...` | GET | Get trust score |
| `/api/attestations?address=0x...` | GET | Get attestations |
| `/api/mcp` | POST | MCP server endpoint |

---

## Troubleshooting

### No trust score returned

- Verify the address exists on Intuition (check portal.intuition.systems)
- Address may not have any attestations yet

### Connection errors

- Ensure Node.js v18+ is installed
- Restart your MCP client after configuration changes
- Check network connectivity to Base

### Empty attestation results

- Try broader filters
- Verify the address has received attestations

---

## Resources

- [Intuition Portal](https://portal.intuition.systems)
- [Intuition Documentation](https://docs.intuition.systems)
- [MCP Protocol Documentation](https://modelcontextprotocol.io)
- [Web3 MCP Hub](https://github.com/rudazy/web3-mcp-hub)
- [Developer Dashboard](https://www.intuitionmcp.xyz/)