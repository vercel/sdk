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

### `models.Configuration3`

```typescript
const value: models.Configuration3 = {
  options: {
    effectiveDate: "end_of_subscription_term",
    orbSubscriptionId: "<id>",
  },
  output: {
    pendingSubscriptionChangeId: "<id>",
  },
  type: "orb_plan_change",
};
```

### `models.Configuration4`

```typescript
const value: models.Configuration4 = {
  options: {
    orbSubscriptionId: "<id>",
  },
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
    orbPlanId: "<id>",
    orbSubscriptionId: "<id>",
  },
  output: {},
  type: "orb_subscription_intent",
};
```

### `models.Configuration7`

```typescript
const value: models.Configuration7 = {
  options: {
    planId: "<id>",
  },
  output: {},
  type: "subscription",
};
```

