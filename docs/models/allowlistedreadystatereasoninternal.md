# AllowListedReadyStateReasonInternal

A narrowed subset of the deployment's `readyStateReasonInternal` — only values in the public allowlist are permitted here. Callers should run their raw reason through `toAllowListedReadyStateReasonInternal` from `@api/events` before assigning. This keeps abuse / moderation / admin reasons out of the public activity log.

## Example Usage

```typescript
import { AllowListedReadyStateReasonInternal } from "@vercel/sdk/models/twentythree.js";

let value: AllowListedReadyStateReasonInternal = "IGNORE_STEP";
```

## Values

```typescript
"EARLY_IGNORE_STEP" | "IGNORE_STEP" | "NAMESPACE_PRUNED" | "UNAFFECTED_PROJECT" | "UNVERIFIED_COMMIT"
```