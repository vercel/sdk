# Billing2

## Example Usage

```typescript
import { Billing2 } from "@vercel/sdk/models/submitbillingdataop.js";

let value: Billing2 = {
  items: [
    {
      billingPlanId: "<id>",
      name: "<value>",
      price: "664.25",
      quantity: 5861.41,
      units: "<value>",
      total: "<value>",
    },
  ],
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `items`                                      | [models.Items](../models/items.md)[]         | :heavy_check_mark:                           | N/A                                          |
| `discounts`                                  | [models.Discounts](../models/discounts.md)[] | :heavy_minus_sign:                           | N/A                                          |