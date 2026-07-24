# CreateDeploymentResponseBodyReadyState

The state of the deployment depending on the process of deploying, or if it is ready or in an error state

## Example Usage

```typescript
import { CreateDeploymentResponseBodyReadyState } from "@vercel/sdk/models/createdeploymentresponsebody.js";

let value: CreateDeploymentResponseBodyReadyState = "READY";
```

## Values

```typescript
"BLOCKED" | "BUILDING" | "CANCELED" | "ERROR" | "INITIALIZING" | "QUEUED" | "READY"
```