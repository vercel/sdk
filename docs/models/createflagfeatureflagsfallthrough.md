# CreateFlagFeatureFlagsFallthrough


## Supported Types

### `models.CreateFlagFallthroughFeatureFlags1`

```typescript
const value: models.CreateFlagFallthroughFeatureFlags1 = {
  type: "variant",
  variantId: "<id>",
};
```

### `models.CreateFlagFallthroughFeatureFlags2`

```typescript
const value: models.CreateFlagFallthroughFeatureFlags2 = {
  type: "split",
  base: {
    type: "entity",
    kind: "<value>",
    attribute: "<value>",
  },
  weights: {},
  defaultVariantId: "<id>",
};
```

