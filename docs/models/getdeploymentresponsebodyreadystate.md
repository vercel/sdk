# GetDeploymentResponseBodyReadyState

The state of the deployment depending on the process of deploying, or if it is ready or in an error state

## Example Usage

```typescript
import { GetDeploymentResponseBodyReadyState } from "@vercel/sdk/models/responsebodyorigin.js";

let value: GetDeploymentResponseBodyReadyState = "READY";
```

## Values

```typescript
"QUEUED" | "BUILDING" | "ERROR" | "INITIALIZING" | "READY" | "CANCELED"
```