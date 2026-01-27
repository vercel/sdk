# GetRollingReleaseSource

Where was the deployment created from

## Example Usage

```typescript
import { GetRollingReleaseSource } from "@vercel/sdk/models/getrollingreleaseop.js";

let value: GetRollingReleaseSource = "cli";
```

## Values

```typescript
"import" | "api-trigger-git-deploy" | "cli" | "clone/repo" | "git" | "import/repo" | "redeploy" | "v0-web"
```