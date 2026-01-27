# ApproveRollingReleaseStageRollingReleaseTarget

If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned. `null` value indicates the "preview" deployment.

## Example Usage

```typescript
import { ApproveRollingReleaseStageRollingReleaseTarget } from "@vercel/sdk/models/approverollingreleasestageop.js";

let value: ApproveRollingReleaseStageRollingReleaseTarget = "staging";
```

## Values

```typescript
"staging" | "production"
```