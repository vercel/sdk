# GetRollingReleaseRollingReleaseReadyState

The state of the deployment depending on the process of deploying, or if it is ready or in an error state

## Example Usage

```typescript
import { GetRollingReleaseRollingReleaseReadyState } from "@vercel/sdk/models/getrollingreleaseop.js";

let value: GetRollingReleaseRollingReleaseReadyState = "READY";
```

## Values

```typescript
"BUILDING" | "ERROR" | "INITIALIZING" | "QUEUED" | "READY" | "CANCELED"
```