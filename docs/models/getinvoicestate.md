# GetInvoiceState

Invoice state.

## Example Usage

```typescript
import { GetInvoiceState } from "@vercel/sdk/models/getinvoiceop.js";

let value: GetInvoiceState = "pending";
```

## Values

```typescript
"pending" | "scheduled" | "invoiced" | "paid" | "notpaid" | "refund_requested" | "refunded"
```