# BuyCreditsConfigurationChangedResources


## Supported Types

### `models.BuyCreditsChangedResourcesBilling1`

```typescript
const value: models.BuyCreditsChangedResourcesBilling1 = {
  productAlias: "<value>",
  productId: "<id>",
  quantity: 6122.8,
  type: "set_plan_item_quantity",
};
```

### `models.BuyCreditsChangedResourcesBilling2`

```typescript
const value: models.BuyCreditsChangedResourcesBilling2 = {
  productAlias: "<value>",
  productId: "<id>",
  quantity: 117.21,
  resourceIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  type: "increase_plan_item_quantity",
};
```

### `models.BuyCreditsChangedResourcesBilling3`

```typescript
const value: models.BuyCreditsChangedResourcesBilling3 = {
  productAlias: "<value>",
  productId: "<id>",
  quantity: 2301.25,
  resourceIds: [],
  type: "decrease_plan_item_quantity",
};
```

### `models.BuyCreditsChangedResourcesBilling4`

```typescript
const value: models.BuyCreditsChangedResourcesBilling4 = {
  addedResourceIds: [],
  productAlias: "<value>",
  productId: "<id>",
  quantity: 1604.48,
  removedResourceIds: [
    "<value 1>",
    "<value 2>",
  ],
  type: "adjust_plan_item_quantity",
};
```

