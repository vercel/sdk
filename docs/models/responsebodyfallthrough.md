# ResponseBodyFallthrough


## Supported Types

### `models.UpdateFlagFallthroughFeatureFlags1`

```typescript
const value: models.UpdateFlagFallthroughFeatureFlags1 = {
  type: "variant",
  variantId: "<id>",
};
```

### `models.UpdateFlagFallthroughFeatureFlags2`

```typescript
const value: models.UpdateFlagFallthroughFeatureFlags2 = {
  base: {
    attribute: "<value>",
    kind: "<value>",
    type: "entity",
  },
  defaultVariantId: "<id>",
  type: "split",
  weights: {
    "key": 1178.49,
  },
};
```

### `models.UpdateFlagFallthroughFeatureFlags3`

```typescript
const value: models.UpdateFlagFallthroughFeatureFlags3 = {
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
      durationMs: 2920.38,
      promille: 2566.4,
    },
  ],
  startTimestamp: 4638.07,
  type: "rollout",
};
```

### `models.UpdateFlagFallthrough4`

```typescript
const value: models.UpdateFlagFallthrough4 = {
  type: "experiment",
};
```

