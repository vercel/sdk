# UserEventPayloadProvider

Present on new events only. Equivalent to "stripe" when absent.

## Example Usage

```typescript
import { UserEventPayloadProvider } from "@vercel/sdk/models/action.js";

let value: UserEventPayloadProvider = "stripe";
```

## Values

```typescript
"chatgpt" | "stripe"
```