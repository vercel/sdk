# ConfigurationPlanItemPrices

The current plan item price overrides

## Example Usage

```typescript
import { ConfigurationPlanItemPrices } from "@vercel/sdk/models/buycreditsop.js";

let value: ConfigurationPlanItemPrices = {
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
| `price`                                                                      | [models.ConfigurationPrice](../models/configurationprice.md)                 | :heavy_check_mark:                                                           | The absolute price that replaces the plan item price, after any rate variant |