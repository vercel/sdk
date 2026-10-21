# PlanItemPrices

The plan item prices to set for the subscription, independent of quantities

## Example Usage

```typescript
import { PlanItemPrices } from "@vercel/sdk/models/buycreditsop.js";

let value: PlanItemPrices = {
  planItemId: "<id>",
  price: {
    model: "unit",
    unitAmount: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `planItemId`                                                                 | *string*                                                                     | :heavy_check_mark:                                                           | The ID of the plan item to set the price for                                 |
| `price`                                                                      | [models.Price](../models/price.md)                                           | :heavy_check_mark:                                                           | The absolute price that replaces the plan item price, after any rate variant |