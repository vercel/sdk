# GetInvoiceState

Invoice state.

## Example Usage

```typescript
import { GetInvoiceState } from "@vercel/sdk/models/getinvoiceop.js";

let value: GetInvoiceState = "draft";
```

## Values

```typescript
"draft" | "invoiced" | "notpaid" | "overdue" | "paid" | "pending" | "refund_requested" | "refunded" | "scheduled"
```