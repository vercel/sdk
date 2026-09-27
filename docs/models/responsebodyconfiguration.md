# ResponseBodyConfiguration


## Supported Types

### `models.BuyCreditsConfiguration1`

```typescript
const value: models.BuyCreditsConfiguration1 = {
  options: {
    productAlias: "<value>",
    quantity: 333.08,
  },
  output: {
    effectiveBehavior: "end_of_term",
    orbPriceId: "<id>",
    pricingSource: "copper",
    productId: "<id>",
  },
  type: "set_plan_item_quantity",
};
```

### `models.BuyCreditsConfiguration2`

```typescript
const value: models.BuyCreditsConfiguration2 = {
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
};
```

### `models.BuyCreditsConfiguration3`

```typescript
const value: models.BuyCreditsConfiguration3 = {
  options: {
    productAlias: "<value>",
    resourceIds: [
      "<value 1>",
    ],
  },
  output: {
    effectiveBehavior: "end_of_term",
    orbPriceId: "<id>",
    pricingSource: "orb",
    productId: "<id>",
  },
  type: "decrease_plan_item_quantity",
};
```

### `models.BuyCreditsConfiguration4`

```typescript
const value: models.BuyCreditsConfiguration4 = {
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
};
```

