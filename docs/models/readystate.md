# ReadyState

The state of the deployment depending on the process of deploying, or if it is ready or in an error state

## Example Usage

```typescript
import { ReadyState } from "@vercel/sdk/models/createdeploymentop.js";

let value: ReadyState = "READY";
```

## Values

```typescript
"QUEUED" | "BUILDING" | "ERROR" | "INITIALIZING" | "READY" | "CANCELED"
```