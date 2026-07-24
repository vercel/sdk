# GetDeploymentResponseBodyReadyState

The state of the deployment depending on the process of deploying, or if it is ready or in an error state

## Example Usage

```typescript
import { GetDeploymentResponseBodyReadyState } from "@vercel/sdk/models/getdeploymentresponsebodymanualprovisioning.js";

let value: GetDeploymentResponseBodyReadyState = "READY";
```

## Values

```typescript
"BLOCKED" | "BUILDING" | "CANCELED" | "ERROR" | "INITIALIZING" | "QUEUED" | "READY"
```