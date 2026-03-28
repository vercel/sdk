# BuyCreditsChangedResourcesBillingResponse1

Resources that were changed as part of this intent. Tracks all logical changes including the primary change and any side effects.

## Example Usage

```typescript
import { BuyCreditsChangedResourcesBillingResponse1 } from "@vercel/sdk/models/buycreditsop.js";

let value: BuyCreditsChangedResourcesBillingResponse1 = {
  productAlias: "<value>",
  productId: "<id>",
  quantity: 8163.69,
  type: "set_plan_item_quantity",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `productAlias`                                        | *string*                                              | :heavy_check_mark:                                    | The alias of the product that was changed.            |
| `productId`                                           | *string*                                              | :heavy_check_mark:                                    | The ID of the product that was changed.               |
| `quantity`                                            | *number*                                              | :heavy_check_mark:                                    | The resulting quantity after this change.             |
| `type`                                                | *"set_plan_item_quantity"*                            | :heavy_check_mark:                                    | N/A                                                   |
| `resourceIds`                                         | *string*[]                                            | :heavy_minus_sign:                                    | The full set of resource IDs after the set operation. |