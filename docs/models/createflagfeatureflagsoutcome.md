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
  type: "split",
  base: {
    type: "entity",
    kind: "<value>",
    attribute: "<value>",
  },
  weights: {
    "key": 5089.47,
    "key1": 1603.89,
    "key2": 3072.65,
  },
  defaultVariantId: "<id>",
};
```

### `models.CreateFlagOutcomeFeatureFlags3`

```typescript
const value: models.CreateFlagOutcomeFeatureFlags3 = {
  type: "rollout",
  base: {
    type: "entity",
    kind: "<value>",
    attribute: "<value>",
  },
  defaultVariantId: "<id>",
  startTimestamp: 7880.29,
  rollFromVariantId: "<id>",
  rollToVariantId: "<id>",
  slots: [],
};
```

