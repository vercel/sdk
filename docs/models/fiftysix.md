# FiftySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftySix } from "@vercel/sdk/models/usereventpayloaditems.js";

let value: FiftySix = {
  invoiceId: "<id>",
  newInvoiceId: "<id>",
  settlementMethod: "credited-paid",
  amount: 3548.84,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `invoiceId`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `newInvoiceId`                                           | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `settlementMethod`                                       | [models.SettlementMethod](../models/settlementmethod.md) | :heavy_check_mark:                                       | N/A                                                      |
| `amount`                                                 | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |