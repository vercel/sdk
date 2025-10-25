# ResponseBodyReadyState

The state of the deployment depending on the process of deploying, or if it is ready or in an error state

## Example Usage

```typescript
import { ResponseBodyReadyState } from "@vercel/sdk/models/getdeploymentop.js";

let value: ResponseBodyReadyState = "READY";
```

## Values

```typescript
"QUEUED" | "BUILDING" | "ERROR" | "INITIALIZING" | "READY" | "CANCELED"
```