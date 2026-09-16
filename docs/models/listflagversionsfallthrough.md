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
  base: {
    attribute: "<value>",
    kind: "<value>",
    type: "entity",
  },
  defaultVariantId: "<id>",
  type: "split",
  weights: {
    "key": 6931.55,
    "key1": 8902.48,
  },
};
```

### `models.ListFlagVersionsFallthrough3`

```typescript
const value: models.ListFlagVersionsFallthrough3 = {
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
      durationMs: 6585.14,
      promille: 5267.08,
    },
  ],
  startTimestamp: 1714.17,
  type: "rollout",
};
```

### `models.ListFlagVersionsFallthrough4`

```typescript
const value: models.ListFlagVersionsFallthrough4 = {
  type: "experiment",
};
```

