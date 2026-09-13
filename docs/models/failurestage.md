# FailureStage

Mirrors `PushFailureStage` in `@api/git-push-repo`.

## Example Usage

```typescript
import { FailureStage } from "@vercel/sdk/models/onehundredandfiftyone.js";

let value: FailureStage = "push";
```

## Values

```typescript
"authorization" | "push" | "unexpected" | "unknown" | "validation"
```