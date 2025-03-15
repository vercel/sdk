# State

Invoice state.

## Example Usage

```typescript
import { State } from "@vercel/sdk/models/getinvoiceop.js";

let value: State = "notpaid";
```

## Values

```typescript
"pending" | "scheduled" | "invoiced" | "paid" | "notpaid" | "refund_requested" | "refunded"
```