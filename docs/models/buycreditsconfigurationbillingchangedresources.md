# BuyCreditsConfigurationBillingChangedResources


## Supported Types

### `models.BuyCreditsChangedResourcesBillingResponse1`

```typescript
const value: models.BuyCreditsChangedResourcesBillingResponse1 = {
  productAlias: "<value>",
  productId: "<id>",
  quantity: 8163.69,
  type: "set_plan_item_quantity",
};
```

### `models.BuyCreditsChangedResourcesBillingResponse2`

```typescript
const value: models.BuyCreditsChangedResourcesBillingResponse2 = {
  productAlias: "<value>",
  productId: "<id>",
  quantity: 8544.08,
  resourceIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  type: "increase_plan_item_quantity",
};
```

### `models.BuyCreditsChangedResourcesBillingResponse3`

```typescript
const value: models.BuyCreditsChangedResourcesBillingResponse3 = {
  productAlias: "<value>",
  productId: "<id>",
  quantity: 1459.4,
  resourceIds: [],
  type: "decrease_plan_item_quantity",
};
```

### `models.BuyCreditsChangedResourcesBillingResponse4`

```typescript
const value: models.BuyCreditsChangedResourcesBillingResponse4 = {
  addedResourceIds: [],
  productAlias: "<value>",
  productId: "<id>",
  quantity: 8113.61,
  removedResourceIds: [
    "<value 1>",
    "<value 2>",
  ],
  type: "adjust_plan_item_quantity",
};
```

