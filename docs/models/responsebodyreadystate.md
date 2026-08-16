# ResponseBodyReadyState

The state of the deployment depending on the process of deploying, or if it is ready or in an error state

## Example Usage

```typescript
import { ResponseBodyReadyState } from "@vercel/sdk/models/getdeploymentgitsourcerepoid.js";

let value: ResponseBodyReadyState = "READY";
```

## Values

```typescript
"BLOCKED" | "BUILDING" | "CANCELED" | "ERROR" | "INITIALIZING" | "QUEUED" | "READY"
```