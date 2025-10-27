# ApproveRollingReleaseStageReadyState

The state of the deployment depending on the process of deploying, or if it is ready or in an error state

## Example Usage

```typescript
import { ApproveRollingReleaseStageReadyState } from "@vercel/sdk/models/approverollingreleasestageop.js";

let value: ApproveRollingReleaseStageReadyState = "READY";
```

## Values

```typescript
"BUILDING" | "ERROR" | "INITIALIZING" | "QUEUED" | "READY" | "CANCELED"
```