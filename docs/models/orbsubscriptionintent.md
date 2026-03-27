# OrbSubscriptionIntent

## Example Usage

```typescript
import { OrbSubscriptionIntent } from "@vercel/sdk/models/buycreditsop.js";

let value: OrbSubscriptionIntent = {
  id: "<id>",
  configuration: {
    options: {
      addedResourceIds: [
        "<value 1>",
        "<value 2>",
      ],
      productAlias: "<value>",
      removedResourceIds: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
    output: {
      orbPriceId: "<id>",
      productId: "<id>",
    },
    type: "adjust_plan_item_quantity",
  },
  createdAt: "1728673646563",
  orbSubscriptionId: "<id>",
  ownerId: "<id>",
  status: "failed",
  updatedAt: "1735603530539",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *string*                                                                         | :heavy_check_mark:                                                               | The ID of the Orb subscription intent with the format `orbsubint_`.              |
| `configuration`                                                                  | *models.ResponseBodyConfiguration*                                               | :heavy_check_mark:                                                               | N/A                                                                              |
| `createdAt`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | The ISO 8601 date-time that the intent was created.                              |
| `orbSubscriptionId`                                                              | *string*                                                                         | :heavy_check_mark:                                                               | The Orb subscription ID this intent is associated with.                          |
| `ownerId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | The owner ID for this intent (e.g., team or user ID).                            |
| `status`                                                                         | [models.BuyCreditsResponseBodyStatus](../models/buycreditsresponsebodystatus.md) | :heavy_check_mark:                                                               | The status of the Orb subscription intent.                                       |
| `updatedAt`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | The ISO 8601 date-time that the intent was last updated.                         |
| `purchaseIntentId`                                                               | *string*                                                                         | :heavy_minus_sign:                                                               | Optional purchase intent ID if this is associated with a purchase.               |