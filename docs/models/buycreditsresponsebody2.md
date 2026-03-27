# BuyCreditsResponseBody2

## Example Usage

```typescript
import { BuyCreditsResponseBody2 } from "@vercel/sdk/models/buycreditsop.js";

let value: BuyCreditsResponseBody2 = {
  purchaseIntent: {
    id: "<id>",
    configuration: {
      options: {
        orbCustomerId: "<id>",
        orbExternalCustomerId: "<id>",
        orbExternalPlanId: "<id>",
        orbPendingSubscriptionChangeId: "<id>",
        orbPlanId: "<id>",
        orbSubscriptionId: "<id>",
      },
      output: {
        pendingSubscriptionChangeId: "<id>",
      },
      type: "orb_subscription_intent",
    },
    createdAt: "1723484693361",
    currency: "usd",
    ownerId: "<id>",
    provider: {
      resourceId: "<id>",
      type: "apple_in_app_purchase",
    },
    status: "failed",
    subtotal: "<value>",
    tax: "<value>",
    total: "<value>",
    updatedAt: "1735642486570",
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `purchaseIntent`                                     | [models.PurchaseIntent](../models/purchaseintent.md) | :heavy_check_mark:                                   | The created purchase intent                          |