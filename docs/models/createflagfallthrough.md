# CreateFlagFallthrough


## Supported Types

### `models.CreateFlagFallthrough1`

```typescript
const value: models.CreateFlagFallthrough1 = {
  type: "<value>",
  variantId: "<id>",
};
```

### `models.CreateFlagFallthrough2`

```typescript
const value: models.CreateFlagFallthrough2 = {
  type: "<value>",
  base: {
    type: "<value>",
    kind: "<value>",
    attribute: "<value>",
  },
  weights: {
    "key": 7976.27,
  },
  defaultVariantId: "<id>",
};
```

### `models.CreateFlagFallthrough3`

```typescript
const value: models.CreateFlagFallthrough3 = {
  type: "<value>",
  base: {
    type: "<value>",
    kind: "<value>",
    attribute: "<value>",
  },
  startTimestamp: 9401.92,
  rollFromVariantId: "<id>",
  rollToVariantId: "<id>",
  defaultVariantId: "<id>",
  slots: [
    {
      promille: 2615.71,
      durationMs: 7616.41,
    },
  ],
};
```

