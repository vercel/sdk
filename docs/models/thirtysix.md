# ThirtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtySix } from "@vercel/sdk/models/payload1.js";

let value: ThirtySix = {
  invoiceId: "<id>",
  newInvoiceId: "<id>",
  settlementMethod: "credited-paid",
  amount: 5713.64,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `invoiceId`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `newInvoiceId`                                           | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `settlementMethod`                                       | [models.SettlementMethod](../models/settlementmethod.md) | :heavy_check_mark:                                       | N/A                                                      |
| `amount`                                                 | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |