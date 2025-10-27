# CancelDeploymentReadyState

The state of the deployment depending on the process of deploying, or if it is ready or in an error state

## Example Usage

```typescript
import { CancelDeploymentReadyState } from "@vercel/sdk/models/canceldeploymentop.js";

let value: CancelDeploymentReadyState = "READY";
```

## Values

```typescript
"BUILDING" | "ERROR" | "INITIALIZING" | "QUEUED" | "READY" | "CANCELED"
```