# Wait

If set to "true", the request will block until the command finishes execution and the response will include its exit code. Otherwise, `exitCode` is `null` unless a previous request waited for the command to finish.

## Example Usage

```typescript
import { Wait } from "@vercel/sdk/models/getsessioncommandop.js";

let value: Wait = "true";
```

## Values

```typescript
"true" | "false"
```