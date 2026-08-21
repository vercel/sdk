# ListFlagVersionsFallthrough


## Supported Types

### `models.ListFlagVersionsFallthrough1`

```typescript
const value: models.ListFlagVersionsFallthrough1 = {
  type: "variant",
  variantId: "<id>",
};
```

### `models.ListFlagVersionsFallthrough2`

```typescript
const value: models.ListFlagVersionsFallthrough2 = {
  type: "split",
  base: {
    type: "entity",
    kind: "<value>",
    attribute: "<value>",
  },
  weights: {
    "key": 6931.55,
    "key1": 8902.48,
  },
  defaultVariantId: "<id>",
};
```

### `models.ListFlagVersionsFallthrough3`

```typescript
const value: models.ListFlagVersionsFallthrough3 = {
  type: "rollout",
  base: {
    type: "entity",
    kind: "<value>",
    attribute: "<value>",
  },
  defaultVariantId: "<id>",
  startTimestamp: 5804.73,
  rollFromVariantId: "<id>",
  rollToVariantId: "<id>",
  slots: [
    {
      promille: 5267.08,
      durationMs: 1714.17,
    },
  ],
};
```

