# BuyCreditsChangedResources4

Resources that were changed as part of this intent. Tracks all logical changes including the primary change and any side effects.

## Example Usage

```typescript
import { BuyCreditsChangedResources4 } from "@vercel/sdk/models/buycreditsop.js";

let value: BuyCreditsChangedResources4 = {
  addedResourceIds: [],
  productAlias: "<value>",
  productId: "<id>",
  quantity: 283.94,
  removedResourceIds: [],
  type: "adjust_plan_item_quantity",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `addedResourceIds`                         | *string*[]                                 | :heavy_check_mark:                         | Resource IDs that were added.              |
| `productAlias`                             | *string*                                   | :heavy_check_mark:                         | The alias of the product that was changed. |
| `productId`                                | *string*                                   | :heavy_check_mark:                         | The ID of the product that was changed.    |
| `quantity`                                 | *number*                                   | :heavy_check_mark:                         | The resulting quantity after this change.  |
| `removedResourceIds`                       | *string*[]                                 | :heavy_check_mark:                         | Resource IDs that were removed.            |
| `type`                                     | *"adjust_plan_item_quantity"*              | :heavy_check_mark:                         | N/A                                        |