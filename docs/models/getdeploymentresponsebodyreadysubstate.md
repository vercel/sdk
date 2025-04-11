# GetDeploymentResponseBodyReadySubstate

Substate of deployment when readyState is 'READY' Tracks whether or not deployment has seen production traffic: - STAGED: never seen production traffic - ROLLING: in the process of having production traffic gradually transitioned. - PROMOTED: has seen production traffic

## Example Usage

```typescript
import { GetDeploymentResponseBodyReadySubstate } from "@vercel/sdk/models/getdeploymentop.js";

let value: GetDeploymentResponseBodyReadySubstate = "STAGED";
```

## Values

```typescript
"STAGED" | "ROLLING" | "PROMOTED"
```