# CancelDeploymentReadySubstate

Substate of deployment when readyState is 'READY' Tracks whether or not deployment has seen production traffic: - STAGED: never seen production traffic - ROLLING: in the process of having production traffic gradually transitioned. - PROMOTED: has seen production traffic

## Example Usage

```typescript
import { CancelDeploymentReadySubstate } from "@vercel/sdk/models/canceldeploymentop.js";

let value: CancelDeploymentReadySubstate = "PROMOTED";
```

## Values

```typescript
"STAGED" | "ROLLING" | "PROMOTED"
```