# StartRollingReleaseSubstate

When set to `PAUSED`, the rollout is frozen at the current percentage until continued.

## Example Usage

```typescript
import { StartRollingReleaseSubstate } from "@vercel/sdk/models/startrollingreleaseop.js";

let value: StartRollingReleaseSubstate = "PAUSED";
```

## Values

```typescript
"PAUSED"
```