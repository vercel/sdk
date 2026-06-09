# GetRollingReleaseRollingReleaseSource

Where was the deployment created from. Best-effort guess for metrics only — not authoritative; do not gate behavior on it.

## Example Usage

```typescript
import { GetRollingReleaseRollingReleaseSource } from "@vercel/sdk/models/getrollingreleaseop.js";

let value: GetRollingReleaseRollingReleaseSource = "cli";
```

## Values

```typescript
"api-trigger-git-deploy" | "cli" | "clone/repo" | "drop" | "git" | "import" | "import/repo" | "redeploy" | "v0-web"
```