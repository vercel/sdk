# CreateFlagFeatureFlagsResponseOutcome


## Supported Types

### `models.CreateFlagOutcomeFeatureFlagsResponse1`

```typescript
const value: models.CreateFlagOutcomeFeatureFlagsResponse1 = {
  type: "variant",
  variantId: "<id>",
};
```

### `models.CreateFlagOutcomeFeatureFlagsResponse2`

```typescript
const value: models.CreateFlagOutcomeFeatureFlagsResponse2 = {
  base: {
    attribute: "<value>",
    kind: "<value>",
    type: "entity",
  },
  defaultVariantId: "<id>",
  type: "split",
  weights: {
    "key": 3245,
  },
};
```

### `models.CreateFlagOutcomeFeatureFlagsResponse3`

```typescript
const value: models.CreateFlagOutcomeFeatureFlagsResponse3 = {
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
      durationMs: 373.97,
      promille: 7472.35,
    },
  ],
  startTimestamp: 3491.18,
  type: "rollout",
};
```

