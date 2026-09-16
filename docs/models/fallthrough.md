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
  base: {
    attribute: "<value>",
    kind: "<value>",
    type: "entity",
  },
  defaultVariantId: "<id>",
  type: "split",
  weights: {
    "key": 863.6,
    "key1": 9268.36,
  },
};
```

### `models.Fallthrough3`

```typescript
const value: models.Fallthrough3 = {
  base: {
    attribute: "<value>",
    kind: "<value>",
    type: "entity",
  },
  defaultVariantId: "<id>",
  rollFromVariantId: "<id>",
  rollToVariantId: "<id>",
  slots: [
    {
      durationMs: 5899.46,
      promille: 942.23,
    },
  ],
  startTimestamp: 3482.02,
  type: "rollout",
};
```

### `models.Fallthrough4`

```typescript
const value: models.Fallthrough4 = {
  type: "experiment",
};
```

