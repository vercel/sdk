# PlanItemQuantities

The plan item quantities to set for the subscription

## Example Usage

```typescript
import { PlanItemQuantities } from "@vercel/sdk/models/buycreditsop.js";

let value: PlanItemQuantities = {
  planItemId: "<id>",
  quantity: 3900.19,
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `planItemId`                                              | *string*                                                  | :heavy_check_mark:                                        | The ID of the plan item to set the quantity for           |
| `quantity`                                                | *number*                                                  | :heavy_check_mark:                                        | The nonnegative integer quantity for the plan item        |
| `resourceIds`                                             | *string*[]                                                | :heavy_minus_sign:                                        | The resource IDs to associate with the plan item quantity |