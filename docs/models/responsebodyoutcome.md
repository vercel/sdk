# ResponseBodyOutcome


## Supported Types

### `models.UpdateFlagOutcomeFeatureFlags1`

```typescript
const value: models.UpdateFlagOutcomeFeatureFlags1 = {
  type: "variant",
  variantId: "<id>",
};
```

### `models.UpdateFlagOutcomeFeatureFlags2`

```typescript
const value: models.UpdateFlagOutcomeFeatureFlags2 = {
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

### `models.UpdateFlagOutcomeFeatureFlags3`

```typescript
const value: models.UpdateFlagOutcomeFeatureFlags3 = {
  type: "rollout",
  base: {
    type: "entity",
    kind: "<value>",
    attribute: "<value>",
  },
  defaultVariantId: "<id>",
  startTimestamp: 9372.47,
  rollFromVariantId: "<id>",
  rollToVariantId: "<id>",
  slots: [
    {
      promille: 5618.61,
      durationMs: 194.97,
    },
  ],
};
```

