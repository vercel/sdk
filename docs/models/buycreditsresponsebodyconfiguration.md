# BuyCreditsResponseBodyConfiguration


## Supported Types

### `models.Configuration1`

```typescript
const value: models.Configuration1 = {
  options: {
    amount: "491.18",
    currency: "vercel_agent_credits",
  },
  output: "<value>",
  type: "credit_topup",
};
```

### `models.Configuration2`

```typescript
const value: models.Configuration2 = {
  options: {
    items: [],
    orderId: "<id>",
  },
  output: "<value>",
  type: "domain_name",
};
```

### `models.BuyCreditsConfiguration3`

```typescript
const value: models.BuyCreditsConfiguration3 = {
  options: {
    effectiveDate: {},
    orbSubscriptionId: "<id>",
  },
  output: {
    pendingSubscriptionChangeId: "<id>",
  },
  type: "orb_plan_change",
};
```

### `models.BuyCreditsConfiguration4`

```typescript
const value: models.BuyCreditsConfiguration4 = {
  options: {},
  output: {
    pendingSubscriptionChangeId: "<id>",
  },
  type: "orb_price_interval",
};
```

### `models.Configuration5`

```typescript
const value: models.Configuration5 = {
  options: {
    externalPlanId: "<id>",
  },
  output: {
    pendingSubscriptionChangeId: "<id>",
  },
  type: "orb_subscription",
};
```

### `models.Configuration6`

```typescript
const value: models.Configuration6 = {
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
};
```

