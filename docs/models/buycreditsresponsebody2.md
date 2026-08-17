# BuyCreditsResponseBody2

## Example Usage

```typescript
import { BuyCreditsResponseBody2 } from "@vercel/sdk/models/buycreditsop.js";

let value: BuyCreditsResponseBody2 = {
  purchaseIntent: {
    id: "<id>",
    configuration: {
      options: {
        planId: "<id>",
      },
      output: {},
      type: "subscription",
    },
    createdAt: "1723484693361",
    currency: "miu",
    ownerId: "<id>",
    provider: {
      resourceId: "<id>",
      type: "tackle_aws_marketplace",
    },
    status: "succeeded",
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