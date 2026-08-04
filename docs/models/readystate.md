# ReadyState

The state of the deployment depending on the process of deploying, or if it is ready or in an error state

## Example Usage

```typescript
import { ReadyState } from "@vercel/sdk/models/canceldeploymentservicesdeploymentsfunctions.js";

let value: ReadyState = "READY";
```

## Values

```typescript
"BLOCKED" | "BUILDING" | "CANCELED" | "ERROR" | "INITIALIZING" | "QUEUED" | "READY"
```