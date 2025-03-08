# SubmitInvoiceRequestBody

## Example Usage

```typescript
import { SubmitInvoiceRequestBody } from "@vercel/sdk/models/submitinvoiceop.js";

let value: SubmitInvoiceRequestBody = {
  invoiceDate: new Date("2024-08-11T13:13:07.788Z"),
  period: {
    start: new Date("2025-12-08T19:51:14.504Z"),
    end: new Date("2024-03-10T05:14:19.198Z"),
  },
  items: [
    {
      billingPlanId: "<id>",
      name: "<value>",
      price: "602.39",
      quantity: 7225,
      units: "<value>",
      total: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `externalId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `invoiceDate`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Invoice date. Must be within the period's start and end.                                      |
| `memo`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Additional memo for the invoice.                                                              |
| `period`                                                                                      | [models.SubmitInvoicePeriod](../models/submitinvoiceperiod.md)                                | :heavy_check_mark:                                                                            | Subscription period for this billing cycle.                                                   |
| `items`                                                                                       | [models.SubmitInvoiceItems](../models/submitinvoiceitems.md)[]                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `discounts`                                                                                   | [models.SubmitInvoiceDiscounts](../models/submitinvoicediscounts.md)[]                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `test`                                                                                        | [models.Test](../models/test.md)                                                              | :heavy_minus_sign:                                                                            | Test mode                                                                                     |