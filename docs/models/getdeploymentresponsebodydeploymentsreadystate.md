# GetDeploymentResponseBodyDeploymentsReadyState

The state of the deployment depending on the process of deploying, or if it is ready or in an error state

## Example Usage

```typescript
import { GetDeploymentResponseBodyDeploymentsReadyState } from "@vercel/sdk/models/getdeploymentresponsebody.js";

let value: GetDeploymentResponseBodyDeploymentsReadyState = "READY";
```

## Values

```typescript
"BLOCKED" | "BUILDING" | "CANCELED" | "ERROR" | "INITIALIZING" | "QUEUED" | "READY"
```