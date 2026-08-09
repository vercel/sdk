# GetRollingReleaseConfigAction

What to do when the gate trips: pause the rollout, or roll it back.

## Example Usage

```typescript
import { GetRollingReleaseConfigAction } from "@vercel/sdk/models/getrollingreleaseconfigop.js";

let value: GetRollingReleaseConfigAction = "rollback";
```

## Values

```typescript
"pause" | "rollback"
```