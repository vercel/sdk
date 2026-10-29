# BuyCreditsResponseBody3

## Example Usage

```typescript
import { BuyCreditsResponseBody3 } from "@vercel/sdk/models/buycreditsop.js";

let value: BuyCreditsResponseBody3 = {
  orbSubscriptionIntent: {
    configuration: {
      options: {
        productAlias: "<value>",
        quantity: 3152.93,
        resourceIds: [
          "<value 1>",
          "<value 2>",
        ],
      },
      output: {
        effectiveBehavior: "immediate",
        orbPriceId: "<id>",
        pricingSource: "copper",
        productId: "<id>",
      },
      type: "set_plan_item_quantity",
    },
    createdAt: "1729837603767",
    id: "<id>",
    orbSubscriptionId: "<id>",
    orbUpdate: {
      mode: "sync",
    },
    ownerId: "<id>",
    status: "pending",
    updatedAt: "1735643411946",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `orbSubscriptionIntent`                                            | [models.OrbSubscriptionIntent](../models/orbsubscriptionintent.md) | :heavy_check_mark:                                                 | N/A                                                                |