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
    orbPriceId: "<id>",
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
    orbPriceId: "<id>",
    productId: "<id>",
  },
  type: "increase_plan_item_quantity",
};
```

### `models.Configuration3`

```typescript
const value: models.Configuration3 = {
  options: {
    productAlias: "<value>",
    resourceIds: [
      "<value 1>",
      "<value 2>",
    ],
  },
  output: {
    orbPriceId: "<id>",
    productId: "<id>",
  },
  type: "decrease_plan_item_quantity",
};
```

### `models.Configuration4`

```typescript
const value: models.Configuration4 = {
  options: {
    addedResourceIds: [
      "<value 1>",
      "<value 2>",
    ],
    productAlias: "<value>",
    removedResourceIds: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  output: {
    orbPriceId: "<id>",
    productId: "<id>",
  },
  type: "adjust_plan_item_quantity",
};
```

