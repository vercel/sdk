# ApproveRollingReleaseStageRollingReleaseReadyState

The state of the deployment depending on the process of deploying, or if it is ready or in an error state

## Example Usage

```typescript
import { ApproveRollingReleaseStageRollingReleaseReadyState } from "@vercel/sdk/models/approverollingreleasestageop.js";

let value: ApproveRollingReleaseStageRollingReleaseReadyState = "READY";
```

## Values

```typescript
"BUILDING" | "ERROR" | "INITIALIZING" | "QUEUED" | "READY" | "CANCELED"
```