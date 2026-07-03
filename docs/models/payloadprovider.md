# PayloadProvider

Present on new events only. Equivalent to "stripe" when absent.

## Example Usage

```typescript
import { PayloadProvider } from "@vercel/sdk/models/action.js";

let value: PayloadProvider = "stripe";
```

## Values

```typescript
"chatgpt" | "stripe"
```