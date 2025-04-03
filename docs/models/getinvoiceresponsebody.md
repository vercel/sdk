# GetInvoiceResponseBody

## Example Usage

```typescript
import { GetInvoiceResponseBody } from "@vercel/sdk/models/getinvoiceop.js";

let value: GetInvoiceResponseBody = {
  invoiceId: "<id>",
  state: "refunded",
  invoiceDate: "<value>",
  period: {
    start: "<value>",
    end: "<value>",
  },
  items: [
    {
      billingPlanId: "<id>",
      name: "<value>",
      price: "156.69",
      quantity: 2736.38,
      units: "<value>",
      total: "<value>",
    },
  ],
  total: "<value>",
  created: "<value>",
  updated: "<value>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `test`                                                                                                   | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | Whether the invoice is in the testmode (no real transaction created).                                    |
| `invoiceId`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Vercel Marketplace Invoice ID.                                                                           |
| `externalId`                                                                                             | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Partner-supplied Invoice ID, if applicable.                                                              |
| `state`                                                                                                  | [models.State](../models/state.md)                                                                       | :heavy_check_mark:                                                                                       | Invoice state.                                                                                           |
| `invoiceNumber`                                                                                          | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | User-readable invoice number.                                                                            |
| `invoiceDate`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Invoice date. ISO 8601 timestamp.                                                                        |
| `period`                                                                                                 | [models.GetInvoicePeriod](../models/getinvoiceperiod.md)                                                 | :heavy_check_mark:                                                                                       | Subscription period for this billing cycle. ISO 8601 timestamps.                                         |
| `memo`                                                                                                   | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Additional memo for the invoice.                                                                         |
| `items`                                                                                                  | [models.GetInvoiceItems](../models/getinvoiceitems.md)[]                                                 | :heavy_check_mark:                                                                                       | Invoice items.                                                                                           |
| `discounts`                                                                                              | [models.GetInvoiceDiscounts](../models/getinvoicediscounts.md)[]                                         | :heavy_minus_sign:                                                                                       | Invoice discounts.                                                                                       |
| `total`                                                                                                  | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Invoice total amount. A dollar-based decimal string.                                                     |
| `refundReason`                                                                                           | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The reason for refund. Only applicable for states "refunded" or "refund_request".                        |
| `refundTotal`                                                                                            | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Refund amount. Only applicable for states "refunded" or "refund_request". A dollar-based decimal string. |
| `created`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | System creation date. ISO 8601 timestamp.                                                                |
| `updated`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | System update date. ISO 8601 timestamp.                                                                  |