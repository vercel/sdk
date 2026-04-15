# CreateFlagOutcome


## Supported Types

### `models.CreateFlagOutcome1`

```typescript
const value: models.CreateFlagOutcome1 = {
  type: "<value>",
  variantId: "<id>",
};
```

### `models.CreateFlagOutcome2`

```typescript
const value: models.CreateFlagOutcome2 = {
  type: "<value>",
  base: {
    type: "<value>",
    kind: "<value>",
    attribute: "<value>",
  },
  weights: {
    "key": 6826.58,
    "key1": 6445.58,
  },
  defaultVariantId: "<id>",
};
```

### `models.CreateFlagOutcome3`

```typescript
const value: models.CreateFlagOutcome3 = {
  type: "<value>",
  base: {
    type: "<value>",
    kind: "<value>",
    attribute: "<value>",
  },
  startTimestamp: 7840.37,
  rollFromVariantId: "<id>",
  rollToVariantId: "<id>",
  defaultVariantId: "<id>",
  slots: [
    {
      promille: 7558.89,
      durationMs: 1577.58,
    },
  ],
};
```

