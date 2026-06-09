# GetDeploymentResponseBodyDeploymentsSource

Where was the deployment created from. Best-effort guess for metrics only — not authoritative; do not gate behavior on it.

## Example Usage

```typescript
import { GetDeploymentResponseBodyDeploymentsSource } from "@vercel/sdk/models/responsebodyproject.js";

let value: GetDeploymentResponseBodyDeploymentsSource = "cli";
```

## Values

```typescript
"api-trigger-git-deploy" | "cli" | "clone/repo" | "drop" | "git" | "import" | "import/repo" | "redeploy" | "v0-web"
```