# CreateDeploymentSource

Where was the deployment created from

## Example Usage

```typescript
import { CreateDeploymentSource } from "@vercel/sdk/models/createdeploymentop.js";

let value: CreateDeploymentSource = "cli";
```

## Values

```typescript
"api-trigger-git-deploy" | "cli" | "clone/repo" | "git" | "import" | "import/repo" | "redeploy" | "v0-web"
```