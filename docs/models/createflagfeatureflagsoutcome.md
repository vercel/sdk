# CreateFlagFeatureFlagsOutcome


## Supported Types

### `models.CreateFlagOutcomeFeatureFlags1`

```typescript
const value: models.CreateFlagOutcomeFeatureFlags1 = {
  type: "variant",
  variantId: "<id>",
};
```

### `models.CreateFlagOutcomeFeatureFlags2`

```typescript
const value: models.CreateFlagOutcomeFeatureFlags2 = {
  base: {
    attribute: "<value>",
    kind: "<value>",
    type: "entity",
  },
  defaultVariantId: "<id>",
  type: "split",
  weights: {
    "key": 5089.47,
    "key1": 1603.89,
    "key2": 3072.65,
  },
};
```

### `models.CreateFlagOutcomeFeatureFlags3`

```typescript
const value: models.CreateFlagOutcomeFeatureFlags3 = {
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
      durationMs: 4563.45,
      promille: 1604.87,
    },
  ],
  startTimestamp: 8874.69,
  type: "rollout",
};
```

### `models.CreateFlagOutcome4`

```typescript
const value: models.CreateFlagOutcome4 = {
  type: "experiment",
};
```

