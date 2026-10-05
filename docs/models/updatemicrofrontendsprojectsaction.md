# UpdateMicrofrontendsProjectsAction

What to do when the gate trips: pause the rollout, or roll it back.

## Example Usage

```typescript
import { UpdateMicrofrontendsProjectsAction } from "@vercel/sdk/models/updatemicrofrontendsresponsebody.js";

let value: UpdateMicrofrontendsProjectsAction = "pause";
```

## Values

```typescript
"pause" | "rollback"
```