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
  type: "split",
  base: {
    type: "entity",
    kind: "<value>",
    attribute: "<value>",
  },
  weights: {
    "key": 1178.49,
  },
  defaultVariantId: "<id>",
};
```

### `models.UpdateFlagFallthroughFeatureFlags3`

```typescript
const value: models.UpdateFlagFallthroughFeatureFlags3 = {
  type: "rollout",
  base: {
    type: "entity",
    kind: "<value>",
    attribute: "<value>",
  },
  defaultVariantId: "<id>",
  startTimestamp: 7807.09,
  rollFromVariantId: "<id>",
  rollToVariantId: "<id>",
  slots: [],
};
```

