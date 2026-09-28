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

### `models.ResponseBody3`

```typescript
const value: models.ResponseBody3 = {
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

