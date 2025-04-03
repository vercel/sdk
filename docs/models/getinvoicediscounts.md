# GetInvoiceDiscounts

Invoice discounts.

## Example Usage

```typescript
import { GetInvoiceDiscounts } from "@vercel/sdk/models/getinvoiceop.js";

let value: GetInvoiceDiscounts = {
  billingPlanId: "<id>",
  name: "<value>",
  amount: "222.14",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `billingPlanId`                                                                             | *string*                                                                                    | :heavy_check_mark:                                                                          | Partner's billing plan ID.                                                                  |
| `resourceId`                                                                                | *string*                                                                                    | :heavy_minus_sign:                                                                          | Partner's resource ID. If not specified, indicates installation-wide discount.              |
| `start`                                                                                     | *string*                                                                                    | :heavy_minus_sign:                                                                          | Start and end are only needed if different from the period's start/end. ISO 8601 timestamp. |
| `end`                                                                                       | *string*                                                                                    | :heavy_minus_sign:                                                                          | Start and end are only needed if different from the period's start/end. ISO 8601 timestamp. |
| `name`                                                                                      | *string*                                                                                    | :heavy_check_mark:                                                                          | Discount name.                                                                              |
| `details`                                                                                   | *string*                                                                                    | :heavy_minus_sign:                                                                          | Additional discount details.                                                                |
| `amount`                                                                                    | *string*                                                                                    | :heavy_check_mark:                                                                          | Discount amount. A dollar-based decimal string.                                             |