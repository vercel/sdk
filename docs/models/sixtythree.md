# SixtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyThree } from "@vercel/sdk/models/payloadrule.js";

let value: SixtyThree = {
  invoiceId: "<id>",
  newInvoiceId: "<id>",
  settlementMethod: "refunded-payment-pending",
  amount: 2170.96,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `invoiceId`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `newInvoiceId`                                           | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `settlementMethod`                                       | [models.SettlementMethod](../models/settlementmethod.md) | :heavy_check_mark:                                       | N/A                                                      |
| `amount`                                                 | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |