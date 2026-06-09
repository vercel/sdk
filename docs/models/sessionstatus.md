# SessionStatus

The status of the sandbox.

## Example Usage

```typescript
import { SessionStatus } from "@vercel/sdk/models/session.js";

let value: SessionStatus = "running";
```

## Values

```typescript
"aborted" | "failed" | "pending" | "running" | "snapshotting" | "stopped" | "stopping"
```