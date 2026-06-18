# CreateProjectProjectsSources

Customer-configurable deployment sources. Every deploy classifies to exactly one. JSON schema in `packages/deployment-policy/schemas/body.ts` enumerates exactly these values. - `'git'` — git provider webhook. - `'cli'` — Vercel CLI (legacy classic-token CLI and SIWV CLI both). - `'rest-api'` — direct user/team-token REST upload. Does NOT cover deploy hooks, Marketplace integrations, or first-party app tokens. - `'deploy-hook'` — project deploy-hook URL. The URL is the credential. - `'integration'` — third-party Marketplace actor: Marketplace integration token, user-delegated OAuth from a Marketplace app, or an unrecognized third-party Vercel App. First-party Vercel Apps are never `'integration'`. - `'v0'` — the v0 product surface (entitlement-gated). v0 deploys through the CLI under the hood, but classifies as its own source so a team can allow or deny v0 independently of `'cli'`. First-party Vercel apps (Toolbar, etc.) classify as `'first-party'` — see `ClassifiedSource` in `./checks`. They're not in this union because they aren't customer-configurable; they bypass `checkDeploymentSources` entirely. v0 is intentionally NOT among them: like the CLI, it's a real product surface and is policy-controllable.

## Example Usage

```typescript
import { CreateProjectProjectsSources } from "@vercel/sdk/models/createprojectresponsebody.js";

let value: CreateProjectProjectsSources = "integration";
```

## Values

```typescript
"cli" | "deploy-hook" | "git" | "integration" | "rest-api" | "v0"
```