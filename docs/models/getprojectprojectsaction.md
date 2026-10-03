# GetProjectProjectsAction

What to do when the gate trips: pause the rollout, or roll it back.

## Example Usage

```typescript
import { GetProjectProjectsAction } from "@vercel/sdk/models/getprojectresponsebody.js";

let value: GetProjectProjectsAction = "rollback";
```

## Values

```typescript
"pause" | "rollback"
```