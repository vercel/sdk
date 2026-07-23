# GetDeploymentResponseBodyDeploymentsReadySubstate

Substate of deployment when readyState is 'READY' Tracks whether or not deployment has seen production traffic: - STAGED: never seen production traffic - ROLLING: in the process of having production traffic gradually transitioned. - PROMOTED: has seen production traffic

## Example Usage

```typescript
import { GetDeploymentResponseBodyDeploymentsReadySubstate } from "@vercel/sdk/models/getdeploymentresponsebody.js";

let value: GetDeploymentResponseBodyDeploymentsReadySubstate = "STAGED";
```

## Values

```typescript
"PROMOTED" | "ROLLING" | "STAGED"
```