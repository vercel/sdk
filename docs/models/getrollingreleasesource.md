# GetRollingReleaseSource

Where was the deployment created from. Best-effort guess for metrics only — not authoritative; do not gate behavior on it.

## Example Usage

```typescript
import { GetRollingReleaseSource } from "@vercel/sdk/models/getrollingreleaseop.js";

let value: GetRollingReleaseSource = "cli";
```

## Values

```typescript
"git" | "cli" | "api-trigger-git-deploy" | "clone/repo" | "import" | "import/repo" | "redeploy" | "v0-web" | "drop"
```