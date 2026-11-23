# StopReason

Why the sandbox stopped: `requested` for a stop requested through the API, `snapshot` for a stop to take a snapshot, `timeout` when the sandbox reached its timeout, `exited` when its main process exited on its own, and `error` when it failed or was stopped by the platform.

## Example Usage

```typescript
import { StopReason } from "@vercel/sdk/models/session.js";

let value: StopReason = "requested";
```

## Values

```typescript
"error" | "exited" | "requested" | "snapshot" | "timeout"
```