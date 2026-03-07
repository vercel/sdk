# ResponseBodyReadySubstate

Substate of deployment when readyState is 'READY' Tracks whether or not deployment has seen production traffic: - STAGED: never seen production traffic - ROLLING: in the process of having production traffic gradually transitioned. - PROMOTED: has seen production traffic

## Example Usage

```typescript
import { ResponseBodyReadySubstate } from "@vercel/sdk/models/responsebodyorigin.js";

let value: ResponseBodyReadySubstate = "STAGED";
```

## Values

```typescript
"STAGED" | "ROLLING" | "PROMOTED"
```