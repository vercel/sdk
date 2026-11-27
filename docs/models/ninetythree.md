# NinetyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyThree } from "@vercel/sdk/models/eightythree.js";

let value: NinetyThree = {
  amount: 2397.72,
  invoiceId: "<id>",
  newInvoiceId: "<id>",
  settlementMethod: "refunded-payment-pending",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `amount`                                                 | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `invoiceId`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `newInvoiceId`                                           | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `settlementMethod`                                       | [models.SettlementMethod](../models/settlementmethod.md) | :heavy_check_mark:                                       | N/A                                                      |