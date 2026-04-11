# GetInvoiceState

Invoice state.

## Example Usage

```typescript
import { GetInvoiceState } from "@vercel/sdk/models/getinvoiceop.js";

let value: GetInvoiceState = "pending";
```

## Values

```typescript
"pending" | "draft" | "scheduled" | "invoiced" | "paid" | "notpaid" | "overdue" | "refund_requested" | "refunded"
```