# Outcome


## Supported Types

### `models.Outcome1`

```typescript
const value: models.Outcome1 = {
  type: "variant",
  variantId: "<id>",
};
```

### `models.Outcome2`

```typescript
const value: models.Outcome2 = {
  type: "split",
  base: {
    type: "entity",
    kind: "<value>",
    attribute: "<value>",
  },
  weights: {
    "key": 8936.73,
    "key1": 4237.14,
  },
  defaultVariantId: "<id>",
};
```

