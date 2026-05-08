# GetDeploymentsReadyState

In which state is the deployment.

## Example Usage

```typescript
import { GetDeploymentsReadyState } from "@vercel/sdk/models/getdeploymentsop.js";

let value: GetDeploymentsReadyState = "READY";
```

## Values

```typescript
"BUILDING" | "ERROR" | "BLOCKED" | "INITIALIZING" | "QUEUED" | "READY" | "CANCELED" | "DELETED"
```