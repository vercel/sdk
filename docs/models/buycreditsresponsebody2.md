# BuyCreditsResponseBody2

## Example Usage

```typescript
import { BuyCreditsResponseBody2 } from "@vercel/sdk/models/buycreditsop.js";

let value: BuyCreditsResponseBody2 = {
  purchaseIntent: {
    configuration: {
      options: {
        fromPlan: {
          orbSubscriptionId: "<id>",
        },
        planId: "<id>",
        transition: {
          type: "preserve_source_cycle",
        },
      },
      output: {},
      type: "subscription",
    },
    createdAt: "1712127191165",
    currency: "usd",
    id: "<id>",
    ownerId: "<id>",
    provider: {
      resourceId: "<id>",
      type: "tackle_aws_marketplace",
    },
    status: "pending",
    subtotal: "<value>",
    tax: "<value>",
    total: "<value>",
    updatedAt: "1735651883742",
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `purchaseIntent`                                     | [models.PurchaseIntent](../models/purchaseintent.md) | :heavy_check_mark:                                   | The created purchase intent                          |