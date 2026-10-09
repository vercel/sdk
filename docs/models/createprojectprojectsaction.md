# CreateProjectProjectsAction

What to do when the gate trips: pause the rollout, or roll it back.

## Example Usage

```typescript
import { CreateProjectProjectsAction } from "@vercel/sdk/models/createprojectfrom.js";

let value: CreateProjectProjectsAction = "pause";
```

## Values

```typescript
"pause" | "rollback"
```