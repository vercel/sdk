# BuyCreditsResponseBody3

## Example Usage

```typescript
import { BuyCreditsResponseBody3 } from "@vercel/sdk/models/buycreditsop.js";

let value: BuyCreditsResponseBody3 = {
  orbSubscriptionIntent: {
    id: "<id>",
    configuration: {
      options: {
        productAlias: "<value>",
        resourceIds: [
          "<value 1>",
        ],
      },
      output: {
        orbPriceId: "<id>",
        productId: "<id>",
      },
      type: "increase_plan_item_quantity",
    },
    createdAt: "1729837603767",
    orbSubscriptionId: "<id>",
    ownerId: "<id>",
    status: "pending",
    updatedAt: "1735639786259",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `orbSubscriptionIntent`                                            | [models.OrbSubscriptionIntent](../models/orbsubscriptionintent.md) | :heavy_check_mark:                                                 | N/A                                                                |