# EightyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyEight } from "@vercel/sdk/models/payloadresources.js";

let value: EightyEight = {
  amount: 9902.77,
  invoiceId: "<id>",
  newInvoiceId: "<id>",
  settlementMethod: "refunded-paid",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `amount`                                                 | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `invoiceId`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `newInvoiceId`                                           | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `settlementMethod`                                       | [models.SettlementMethod](../models/settlementmethod.md) | :heavy_check_mark:                                       | N/A                                                      |