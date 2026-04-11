# SubmitBillingDataType


              Type of the metric.
              - total: measured total value, such as Database size
              - interval: usage during the period, such as i/o or number of queries.
              - rate: rate of usage, such as queries per second.
            

## Example Usage

```typescript
import { SubmitBillingDataType } from "@vercel/sdk/models/submitbillingdataop.js";

let value: SubmitBillingDataType = "interval";
```

## Values

```typescript
"total" | "interval" | "rate"
```