# GetDeploymentsState

In which state is the deployment.

## Example Usage

```typescript
import { GetDeploymentsState } from "@vercel/sdk/models/getdeploymentsop.js";

let value: GetDeploymentsState = "READY";
```

## Values

```typescript
"BLOCKED" | "BUILDING" | "CANCELED" | "DELETED" | "ERROR" | "INITIALIZING" | "QUEUED" | "READY"
```