# BuyCreditsChangedResources3

Resources that were changed as part of this intent. Tracks all logical changes including the primary change and any side effects.

## Example Usage

```typescript
import { BuyCreditsChangedResources3 } from "@vercel/sdk/models/buycreditsop.js";

let value: BuyCreditsChangedResources3 = {
  productAlias: "<value>",
  productId: "<id>",
  quantity: 3166.54,
  resourceIds: [
    "<value 1>",
    "<value 2>",
  ],
  type: "decrease_plan_item_quantity",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `productAlias`                             | *string*                                   | :heavy_check_mark:                         | The alias of the product that was changed. |
| `productId`                                | *string*                                   | :heavy_check_mark:                         | The ID of the product that was changed.    |
| `quantity`                                 | *number*                                   | :heavy_check_mark:                         | The resulting quantity after this change.  |
| `resourceIds`                              | *string*[]                                 | :heavy_check_mark:                         | Resource IDs that were removed.            |
| `type`                                     | *"decrease_plan_item_quantity"*            | :heavy_check_mark:                         | N/A                                        |