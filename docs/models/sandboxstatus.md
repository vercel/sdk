# SandboxStatus

The status of the sandbox.

## Example Usage

```typescript
import { SandboxStatus } from "@vercel/sdk/models/sandbox.js";

let value: SandboxStatus = "running";
```

## Values

```typescript
"failed" | "aborted" | "pending" | "stopping" | "snapshotting" | "running" | "stopped"
```