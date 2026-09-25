# GetVercelCiInvocationStatus

## Example Usage

```typescript
import { GetVercelCiInvocationStatus } from "@vercel/sdk/models/getvercelciinvocationop.js";

let value: GetVercelCiInvocationStatus = "awaiting_jobs";
```

## Values

```typescript
"new" | "skipped" | "bootstrapping" | "bootstrapping_failed" | "snapshotted" | "sandbox_named" | "jobs_on_hive_clone_dispatched" | "jobs_on_hive_dispatched" | "jobs_on_hive_completed" | "jobs_on_hive_failed" | "awaiting_jobs" | "completed"
```