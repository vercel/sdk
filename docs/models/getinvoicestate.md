# GetInvoiceState

Invoice state. Reports the payment state of the invoice; refund progress is reported separately via "refundedTotal" and "pendingRefundTotal". The states "refunded" and "refund_requested" only appear when the payment state cannot be determined.

## Example Usage

```typescript
import { GetInvoiceState } from "@vercel/sdk/models/getinvoiceop.js";

let value: GetInvoiceState = "draft";
```

## Values

```typescript
"draft" | "invoiced" | "notpaid" | "overdue" | "paid" | "pending" | "refund_requested" | "refunded" | "scheduled"
```