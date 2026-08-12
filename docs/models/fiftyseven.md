# FiftySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftySeven } from "@vercel/sdk/models/userevent.js";

let value: FiftySeven = {
  invoiceId: "<id>",
  newInvoiceId: "<id>",
  settlementMethod: "credited-payment-pending",
  amount: 3819.19,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `invoiceId`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `newInvoiceId`                                           | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `settlementMethod`                                       | [models.SettlementMethod](../models/settlementmethod.md) | :heavy_check_mark:                                       | N/A                                                      |
| `amount`                                                 | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |