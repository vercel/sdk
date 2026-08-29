# BuyCreditsResponseBody


## Supported Types

### `models.BuyCreditsResponseBody1`

```typescript
const value: models.BuyCreditsResponseBody1 = {
  checkoutSessionId: "<id>",
  checkoutSessionUrl: "https://potable-muscat.org/",
};
```

### `models.BuyCreditsResponseBody2`

```typescript
const value: models.BuyCreditsResponseBody2 = {
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

### `models.BuyCreditsResponseBody3`

```typescript
const value: models.BuyCreditsResponseBody3 = {
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
        effectiveBehavior: "immediate",
        orbPriceId: "<id>",
        pricingSource: "orb",
        productId: "<id>",
      },
      type: "increase_plan_item_quantity",
    },
    createdAt: "1729837603767",
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

