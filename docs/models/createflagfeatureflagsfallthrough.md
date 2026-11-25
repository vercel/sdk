# CreateFlagFeatureFlagsFallthrough


## Supported Types

### `models.CreateFlagFallthroughFeatureFlags1`

```typescript
const value: models.CreateFlagFallthroughFeatureFlags1 = {
  type: "<value>",
  variantId: "<id>",
};
```

### `models.CreateFlagFallthroughFeatureFlags2`

```typescript
const value: models.CreateFlagFallthroughFeatureFlags2 = {
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

### `models.CreateFlagFallthroughFeatureFlags3`

```typescript
const value: models.CreateFlagFallthroughFeatureFlags3 = {
  type: "<value>",
  base: {
    type: "<value>",
    kind: "<value>",
    attribute: "<value>",
  },
  startTimestamp: 4507.34,
  rollFromVariantId: "<id>",
  rollToVariantId: "<id>",
  defaultVariantId: "<id>",
  slots: [],
};
```

