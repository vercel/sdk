# CreateFlagFeatureFlagsRequestFallthrough


## Supported Types

### `models.CreateFlagFallthroughFeatureFlagsRequest1`

```typescript
const value: models.CreateFlagFallthroughFeatureFlagsRequest1 = {
  type: "<value>",
  variantId: "<id>",
};
```

### `models.CreateFlagFallthroughFeatureFlagsRequest2`

```typescript
const value: models.CreateFlagFallthroughFeatureFlagsRequest2 = {
  type: "<value>",
  base: {
    type: "<value>",
    kind: "<value>",
    attribute: "<value>",
  },
  weights: {
    "key": 5063.91,
  },
  defaultVariantId: "<id>",
};
```

### `models.CreateFlagFallthroughFeatureFlagsRequest3`

```typescript
const value: models.CreateFlagFallthroughFeatureFlagsRequest3 = {
  type: "<value>",
  base: {
    type: "<value>",
    kind: "<value>",
    attribute: "<value>",
  },
  startTimestamp: 1303.61,
  rollFromVariantId: "<id>",
  rollToVariantId: "<id>",
  defaultVariantId: "<id>",
  slots: [
    {
      promille: 7580.59,
      durationMs: 5072.29,
    },
  ],
};
```

