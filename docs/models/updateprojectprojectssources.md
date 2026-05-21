# UpdateProjectProjectsSources

The mechanism that produced a deployment, expressed as values a customer can write in a {@link DeploymentSourcesRule} allowlist. The JSON schema at `packages/deployment-policy/schemas/body.ts` enumerates exactly these values. - `'git'`: a Git provider webhook (GitHub / GitLab / Bitbucket). - `'cli'`: an upload via the Vercel CLI. Covers both the legacy CLI (classic user token, identified by `vercel`/`now` user-agent) and the Sign-In-With-Vercel CLI (a first-party Vercel App token whose `clientId` is the CLI's). The canonical CLI client IDs are tracked in `packages/acl/app-has-all-permissions.ts` (`isVercelCliApp`). - `'rest-api'`: a direct REST API upload — a user or team token POSTing directly. Does NOT cover deploy-hook URLs, Marketplace integration tokens, or first-party Vercel App tokens; those are their own sources. - `'deploy-hook'`: a trigger via a project deploy-hook URL. The URL itself is the credential, so the request has no authenticated principal. - `'integration'`: a **third-party Marketplace** OAuth2 actor — a Marketplace integration token, a user-delegated OAuth flow where a Marketplace integration is acting on a user's behalf, or an unrecognized third-party Vercel App token. First-party Vercel Apps are NEVER `'integration'`. Vercel-owned first-party apps other than the CLI (e.g. v0, Toolbar, Omni Agent) are *not* in this type — they aren't customer-configurable. They classify as `'first-party'` (see `ClassifiedSource` in `@api/deployment-policy/checks`) and are auto-allowed by `checkDeploymentSources`. The split is intentional: a team can permit their own automation and CLI usage while blocking third-party Marketplace integrators — and Vercel's own first-party tooling always works.

## Example Usage

```typescript
import { UpdateProjectProjectsSources } from "@vercel/sdk/models/updateprojectresponsebody.js";

let value: UpdateProjectProjectsSources = "rest-api";
```

## Values

```typescript
"git" | "cli" | "rest-api" | "deploy-hook" | "integration"
```