# CompleteRollingReleaseRollingReleaseReadyState

The state of the deployment depending on the process of deploying, or if it is ready or in an error state

## Example Usage

```typescript
import { CompleteRollingReleaseRollingReleaseReadyState } from "@vercel/sdk/models/completerollingreleaseop.js";

let value: CompleteRollingReleaseRollingReleaseReadyState = "READY";
```

## Values

```typescript
"BUILDING" | "ERROR" | "INITIALIZING" | "QUEUED" | "READY" | "CANCELED"
```