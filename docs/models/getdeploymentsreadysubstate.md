# GetDeploymentsReadySubstate

Substate of deployment when readyState is 'READY' Tracks whether or not deployment has seen production traffic: - STAGED: never seen production traffic - ROLLING: in the process of gradually transitioning production traffic - PROMOTED: has seen production traffic

## Example Usage

```typescript
import { GetDeploymentsReadySubstate } from "@vercel/sdk/models/getdeploymentsop.js";

let value: GetDeploymentsReadySubstate = "PROMOTED";
```

## Values

```typescript
"STAGED" | "ROLLING" | "PROMOTED"
```