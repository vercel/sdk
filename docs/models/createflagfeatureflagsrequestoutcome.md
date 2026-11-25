# CreateFlagFeatureFlagsRequestOutcome


## Supported Types

### `models.CreateFlagOutcomeFeatureFlagsRequest1`

```typescript
const value: models.CreateFlagOutcomeFeatureFlagsRequest1 = {
  type: "<value>",
  variantId: "<id>",
};
```

### `models.CreateFlagOutcomeFeatureFlagsRequest2`

```typescript
const value: models.CreateFlagOutcomeFeatureFlagsRequest2 = {
  type: "<value>",
  base: {
    type: "<value>",
    kind: "<value>",
    attribute: "<value>",
  },
  weights: {},
  defaultVariantId: "<id>",
};
```

### `models.CreateFlagOutcomeFeatureFlagsRequest3`

```typescript
const value: models.CreateFlagOutcomeFeatureFlagsRequest3 = {
  type: "<value>",
  base: {
    type: "<value>",
    kind: "<value>",
    attribute: "<value>",
  },
  startTimestamp: 5344.7,
  rollFromVariantId: "<id>",
  rollToVariantId: "<id>",
  defaultVariantId: "<id>",
  slots: [
    {
      promille: 9527.88,
      durationMs: 6047.18,
    },
  ],
};
```

