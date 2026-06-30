# StartRollingReleaseRollingReleaseReadyState

The state of the deployment depending on the process of deploying, or if it is ready or in an error state

## Example Usage

```typescript
import { StartRollingReleaseRollingReleaseReadyState } from "@vercel/sdk/models/startrollingreleaseop.js";

let value: StartRollingReleaseRollingReleaseReadyState = "READY";
```

## Values

```typescript
"BLOCKED" | "BUILDING" | "CANCELED" | "ERROR" | "INITIALIZING" | "QUEUED" | "READY"
```