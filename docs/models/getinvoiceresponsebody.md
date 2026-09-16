# GetInvoiceResponseBody

## Example Usage

```typescript
import { GetInvoiceResponseBody } from "@vercel/sdk/models/getinvoiceop.js";

let value: GetInvoiceResponseBody = {
  created: "<value>",
  invoiceDate: "<value>",
  invoiceId: "<id>",
  items: [
    {
      billingPlanId: "<id>",
      name: "<value>",
      price: "844.35",
      quantity: 1082.62,
      total: "<value>",
      units: "<value>",
    },
  ],
  period: {
    end: "<value>",
    start: "<value>",
  },
  state: "refunded",
  total: "<value>",
  updated: "<value>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `created`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | System creation date. ISO 8601 timestamp.                                                                |
| `discounts`                                                                                              | [models.GetInvoiceDiscounts](../models/getinvoicediscounts.md)[]                                         | :heavy_minus_sign:                                                                                       | Invoice discounts.                                                                                       |
| `externalId`                                                                                             | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Partner-supplied Invoice ID, if applicable.                                                              |
| `invoiceDate`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Invoice date. ISO 8601 timestamp.                                                                        |
| `invoiceId`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Vercel Marketplace Invoice ID.                                                                           |
| `invoiceNumber`                                                                                          | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | User-readable invoice number.                                                                            |
| `items`                                                                                                  | [models.GetInvoiceItems](../models/getinvoiceitems.md)[]                                                 | :heavy_check_mark:                                                                                       | Invoice items.                                                                                           |
| `memo`                                                                                                   | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Additional memo for the invoice.                                                                         |
| `paidAt`                                                                                                 | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Moment the invoice was paid. ISO 8601 timestamp.                                                         |
| `period`                                                                                                 | [models.GetInvoicePeriod](../models/getinvoiceperiod.md)                                                 | :heavy_check_mark:                                                                                       | Subscription period for this billing cycle. ISO 8601 timestamps.                                         |
| `refundedAt`                                                                                             | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Most recent moment the invoice was refunded. ISO 8601 timestamp.                                         |
| `refundReason`                                                                                           | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The reason for refund. Only applicable for states "refunded" or "refund_request".                        |
| `refundTotal`                                                                                            | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Refund amount. Only applicable for states "refunded" or "refund_request". A dollar-based decimal string. |
| `state`                                                                                                  | [models.GetInvoiceState](../models/getinvoicestate.md)                                                   | :heavy_check_mark:                                                                                       | Invoice state.                                                                                           |
| `test`                                                                                                   | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | Whether the invoice is in the testmode (no real transaction created).                                    |
| `total`                                                                                                  | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Invoice total amount. A dollar-based decimal string.                                                     |
| `updated`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | System update date. ISO 8601 timestamp.                                                                  |