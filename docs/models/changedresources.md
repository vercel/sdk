# ChangedResources


## Supported Types

### `models.ChangedResources1`

```typescript
const value: models.ChangedResources1 = {
  productAlias: "<value>",
  productId: "<id>",
  quantity: 4158.03,
  type: "set_plan_item_quantity",
};
```

### `models.ChangedResources2`

```typescript
const value: models.ChangedResources2 = {
  productAlias: "<value>",
  productId: "<id>",
  quantity: 3944.27,
  resourceIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  type: "increase_plan_item_quantity",
};
```

### `models.ChangedResources3`

```typescript
const value: models.ChangedResources3 = {
  productAlias: "<value>",
  productId: "<id>",
  quantity: 6262.84,
  resourceIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  type: "decrease_plan_item_quantity",
};
```

### `models.ChangedResources4`

```typescript
const value: models.ChangedResources4 = {
  addedResourceIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  productAlias: "<value>",
  productId: "<id>",
  quantity: 646.59,
  removedResourceIds: [
    "<value 1>",
  ],
  type: "adjust_plan_item_quantity",
};
```

