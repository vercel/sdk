# ResponseBodySource

Where was the deployment created from

## Example Usage

```typescript
import { ResponseBodySource } from "@vercel/sdk/models/getdeploymentop.js";

let value: ResponseBodySource = "cli";
```

## Values

```typescript
"api-trigger-git-deploy" | "cli" | "clone/repo" | "git" | "import" | "import/repo" | "redeploy" | "v0-web"
```