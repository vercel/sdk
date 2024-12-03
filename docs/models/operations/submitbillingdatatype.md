# SubmitBillingDataType

\n              Type of the metric.\n              - total: measured total value, such as Database size\n              - interval: usage during the period, such as i/o or number of queries.\n              - rate: rate of usage, such as queries per second.\n            

## Example Usage

```typescript
import { SubmitBillingDataType } from "@vercel/sdk/models/operations/submitbillingdata.js";

let value: SubmitBillingDataType = "interval";
```

## Values

```typescript
"total" | "interval" | "rate"
```