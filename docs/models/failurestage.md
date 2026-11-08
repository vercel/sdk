# FailureStage

Mirrors `PushFailureStage` in `api-git-providers`.

## Example Usage

```typescript
import { FailureStage } from "@vercel/sdk/models/payloadinitiator.js";

let value: FailureStage = "push";
```

## Values

```typescript
"authorization" | "push" | "unexpected" | "unknown" | "validation"
```