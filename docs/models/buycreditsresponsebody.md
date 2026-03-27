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

