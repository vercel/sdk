# CreateFlagFeatureFlagsResponseFallthrough


## Supported Types

### `models.CreateFlagFallthroughFeatureFlagsResponse1`

```typescript
const value: models.CreateFlagFallthroughFeatureFlagsResponse1 = {
  type: "variant",
  variantId: "<id>",
};
```

### `models.CreateFlagFallthroughFeatureFlagsResponse2`

```typescript
const value: models.CreateFlagFallthroughFeatureFlagsResponse2 = {
  base: {
    attribute: "<value>",
    kind: "<value>",
    type: "entity",
  },
  defaultVariantId: "<id>",
  type: "split",
  weights: {
    "key": 757.9,
  },
};
```

### `models.CreateFlagFallthroughFeatureFlagsResponse3`

```typescript
const value: models.CreateFlagFallthroughFeatureFlagsResponse3 = {
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
      durationMs: 363.24,
      promille: 682.18,
    },
  ],
  startTimestamp: 1036.79,
  type: "rollout",
};
```

