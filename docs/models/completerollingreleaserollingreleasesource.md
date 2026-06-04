# CompleteRollingReleaseRollingReleaseSource

Where was the deployment created from. Best-effort guess for metrics only — not authoritative; do not gate behavior on it.

## Example Usage

```typescript
import { CompleteRollingReleaseRollingReleaseSource } from "@vercel/sdk/models/completerollingreleaseop.js";

let value: CompleteRollingReleaseRollingReleaseSource = "cli";
```

## Values

```typescript
"git" | "cli" | "api-trigger-git-deploy" | "clone/repo" | "import" | "import/repo" | "redeploy" | "v0-web" | "drop"
```