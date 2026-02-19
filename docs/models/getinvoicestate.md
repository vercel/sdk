# GetInvoiceState

Invoice state.

## Example Usage

```typescript
import { GetInvoiceState } from "@vercel/sdk/models/getinvoiceop.js";

let value: GetInvoiceState = "pending";
```

## Values

```typescript
"pending" | "paid" | "notpaid" | "draft" | "scheduled" | "invoiced" | "overdue" | "refund_requested" | "refunded"
```