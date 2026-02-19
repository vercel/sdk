# Wait

If set to \"true\", the request will block until the command finishes execution. Useful for synchronously waiting for command completion.

## Example Usage

```typescript
import { Wait } from "@vercel/sdk/models/getcommandop.js";

let value: Wait = "true";
```

## Values

```typescript
"true" | "false"
```