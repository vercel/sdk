# Fallthrough


## Supported Types

### `models.Fallthrough1`

```typescript
const value: models.Fallthrough1 = {
  type: "variant",
  variantId: "<id>",
};
```

### `models.Fallthrough2`

```typescript
const value: models.Fallthrough2 = {
  type: "split",
  base: {
    type: "entity",
    kind: "<value>",
    attribute: "<value>",
  },
  weights: {
    "key": 863.6,
    "key1": 9268.36,
  },
  defaultVariantId: "<id>",
};
```

