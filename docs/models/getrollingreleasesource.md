# GetRollingReleaseSource

Where was the deployment created from

## Example Usage

```typescript
import { GetRollingReleaseSource } from "@vercel/sdk/models/getrollingreleaseop.js";

let value: GetRollingReleaseSource = "cli";
```

## Values

```typescript
"git" | "cli" | "import" | "api-trigger-git-deploy" | "clone/repo" | "import/repo" | "redeploy" | "v0-web"
```