# ThirtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyThree } from "@vercel/sdk/models/usereventpayload25beforetype.js";

let value: ThirtyThree = {
  invoiceId: "<id>",
  newInvoiceId: "<id>",
  settlementMethod: "credited-paid",
  amount: 2465.64,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `invoiceId`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `newInvoiceId`                                           | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `settlementMethod`                                       | [models.SettlementMethod](../models/settlementmethod.md) | :heavy_check_mark:                                       | N/A                                                      |
| `amount`                                                 | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |