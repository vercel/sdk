# GetInvoiceItems

Invoice items.

## Example Usage

```typescript
import { GetInvoiceItems } from "@vercel/sdk/models/getinvoiceop.js";

let value: GetInvoiceItems = {
  billingPlanId: "<id>",
  name: "<value>",
  price: "65.95",
  quantity: 8606.59,
  units: "<value>",
  total: "<value>",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `billingPlanId`                                                                             | *string*                                                                                    | :heavy_check_mark:                                                                          | Partner's billing plan ID.                                                                  |
| `resourceId`                                                                                | *string*                                                                                    | :heavy_minus_sign:                                                                          | Partner's resource ID. If not specified, indicates installation-wide item.                  |
| `start`                                                                                     | *string*                                                                                    | :heavy_minus_sign:                                                                          | Start and end are only needed if different from the period's start/end. ISO 8601 timestamp. |
| `end`                                                                                       | *string*                                                                                    | :heavy_minus_sign:                                                                          | Start and end are only needed if different from the period's start/end. ISO 8601 timestamp. |
| `name`                                                                                      | *string*                                                                                    | :heavy_check_mark:                                                                          | Invoice item name.                                                                          |
| `details`                                                                                   | *string*                                                                                    | :heavy_minus_sign:                                                                          | Additional item details.                                                                    |
| `price`                                                                                     | *string*                                                                                    | :heavy_check_mark:                                                                          | Item price. A dollar-based decimal string.                                                  |
| `quantity`                                                                                  | *number*                                                                                    | :heavy_check_mark:                                                                          | Item quantity.                                                                              |
| `units`                                                                                     | *string*                                                                                    | :heavy_check_mark:                                                                          | Units for item's quantity.                                                                  |
| `total`                                                                                     | *string*                                                                                    | :heavy_check_mark:                                                                          | Item total. A dollar-based decimal string.                                                  |