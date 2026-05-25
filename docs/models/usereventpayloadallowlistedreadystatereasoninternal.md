# UserEventPayloadAllowListedReadyStateReasonInternal

A narrowed subset of the deployment's `readyStateReasonInternal` — only values in the public allowlist are permitted here. Callers should run their raw reason through `toAllowListedReadyStateReasonInternal` from `@api/events` before assigning. This keeps abuse / moderation / admin reasons out of the public activity log.

## Example Usage

```typescript
import { UserEventPayloadAllowListedReadyStateReasonInternal } from "@vercel/sdk/models/resources.js";

let value: UserEventPayloadAllowListedReadyStateReasonInternal = "IGNORE_STEP";
```

## Values

```typescript
"EARLY_IGNORE_STEP" | "IGNORE_STEP" | "NAMESPACE_PRUNED" | "UNAFFECTED_PROJECT" | "UNVERIFIED_COMMIT"
```