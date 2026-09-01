# CreateDeploymentResponseBodySource

Where was the deployment created from. Best-effort guess for metrics only — not authoritative; do not gate behavior on it.

## Example Usage

```typescript
import { CreateDeploymentResponseBodySource } from "@vercel/sdk/models/createdeploymentvaluedeploymentseq.js";

let value: CreateDeploymentResponseBodySource = "cli";
```

## Values

```typescript
"api-trigger-git-deploy" | "cli" | "clone/repo" | "drop" | "git" | "git-deploy-hook" | "import" | "import/repo" | "redeploy" | "v0-web"
```