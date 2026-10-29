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
    configuration: {
      options: {
        planId: "<id>",
      },
      output: {},
      type: "subscription",
    },
    createdAt: "1723484693361",
    currency: "miu",
    id: "<id>",
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

