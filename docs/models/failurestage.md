# FailureStage

Mirrors `PushFailureStage` in `@api/git-push-repo`.

## Example Usage

```typescript
import { FailureStage } from "@vercel/sdk/models/payloadtarget.js";

let value: FailureStage = "push";
```

## Values

```typescript
"authorization" | "push" | "unexpected" | "unknown" | "validation"
```