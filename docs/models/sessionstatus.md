# SessionStatus

The status of the sandbox.

## Example Usage

```typescript
import { SessionStatus } from "@vercel/sdk/models/session.js";

let value: SessionStatus = "running";
```

## Values

```typescript
"failed" | "aborted" | "pending" | "stopping" | "snapshotting" | "running" | "stopped"
```