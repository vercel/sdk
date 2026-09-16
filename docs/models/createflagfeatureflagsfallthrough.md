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
  base: {
    attribute: "<value>",
    kind: "<value>",
    type: "entity",
  },
  defaultVariantId: "<id>",
  type: "split",
  weights: {},
};
```

### `models.CreateFlagFallthroughFeatureFlags3`

```typescript
const value: models.CreateFlagFallthroughFeatureFlags3 = {
  base: {
    attribute: "<value>",
    kind: "<value>",
    type: "entity",
  },
  defaultVariantId: "<id>",
  rollFromVariantId: "<id>",
  rollToVariantId: "<id>",
  slots: [],
  startTimestamp: 734.08,
  type: "rollout",
};
```

### `models.CreateFlagFallthrough4`

```typescript
const value: models.CreateFlagFallthrough4 = {
  type: "experiment",
};
```

