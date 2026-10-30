# SeventyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyNine } from "@vercel/sdk/models/usereventpayload26apikey.js";

let value: SeventyNine = {
  amount: 3193.54,
  invoiceId: "<id>",
  newInvoiceId: "<id>",
  settlementMethod: "credited-payment-pending",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `amount`                                                 | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `invoiceId`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `newInvoiceId`                                           | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `settlementMethod`                                       | [models.SettlementMethod](../models/settlementmethod.md) | :heavy_check_mark:                                       | N/A                                                      |