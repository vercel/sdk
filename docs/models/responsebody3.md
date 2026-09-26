# ResponseBody3

## Example Usage

```typescript
import { ResponseBody3 } from "@vercel/sdk/models/buycreditsop.js";

let value: ResponseBody3 = {
  orbSubscriptionIntent: {
    configuration: {
      options: {
        addedResourceIds: [],
        productAlias: "<value>",
        removedResourceIds: [],
      },
      output: {
        effectiveBehavior: "immediate",
        orbPriceId: "<id>",
        pricingSource: "orb",
        productId: "<id>",
      },
      type: "adjust_plan_item_quantity",
    },
    createdAt: "1717358285269",
    id: "<id>",
    orbSubscriptionId: "<id>",
    orbUpdate: {
      appliedAt: "<value>",
      mode: "async",
      status: "succeeded",
    },
    ownerId: "<id>",
    status: "succeeded",
    updatedAt: "1735674038069",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `orbSubscriptionIntent`                                            | [models.OrbSubscriptionIntent](../models/orbsubscriptionintent.md) | :heavy_check_mark:                                                 | N/A                                                                |