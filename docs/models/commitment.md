# Commitment

## Example Usage

```typescript
import { Commitment } from "@vercel/sdk/models/userevent.js";

let value: Commitment = {
  maximumMonthlySpend: "<value>",
  deferredInvoiceTargetBalance: "<value>",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `maximumMonthlySpend`          | *string*                       | :heavy_check_mark:             | N/A                            |
| `deferredInvoiceTargetBalance` | *string*                       | :heavy_check_mark:             | N/A                            |