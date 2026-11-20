# EightyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyNine } from "@vercel/sdk/models/usereventpayloadresources.js";

let value: EightyNine = {
  amount: 3127.76,
  invoiceId: "<id>",
  newInvoiceId: "<id>",
  settlementMethod: "credited-paid",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `amount`                                                 | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `invoiceId`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `newInvoiceId`                                           | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `settlementMethod`                                       | [models.SettlementMethod](../models/settlementmethod.md) | :heavy_check_mark:                                       | N/A                                                      |