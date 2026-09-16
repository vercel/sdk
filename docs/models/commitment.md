# Commitment

## Example Usage

```typescript
import { Commitment } from "@vercel/sdk/models/userevent.js";

let value: Commitment = {
  deferredInvoiceTargetBalance: "<value>",
  maximumMonthlySpend: "<value>",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `deferredInvoiceTargetBalance` | *string*                       | :heavy_check_mark:             | N/A                            |
| `maximumMonthlySpend`          | *string*                       | :heavy_check_mark:             | N/A                            |