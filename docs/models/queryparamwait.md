# QueryParamWait

If set to "true", the request will block until the command finishes execution. Useful for synchronously waiting for command completion.

## Example Usage

```typescript
import { QueryParamWait } from "@vercel/sdk/models/getsessioncommandop.js";

let value: QueryParamWait = "true";
```

## Values

```typescript
"true" | "false"
```