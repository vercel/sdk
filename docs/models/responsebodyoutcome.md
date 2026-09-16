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

### `models.UpdateFlagOutcomeFeatureFlags3`

```typescript
const value: models.UpdateFlagOutcomeFeatureFlags3 = {
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
      durationMs: 7957.18,
      promille: 5618.61,
    },
  ],
  startTimestamp: 194.97,
  type: "rollout",
};
```

### `models.UpdateFlagOutcome4`

```typescript
const value: models.UpdateFlagOutcome4 = {
  type: "experiment",
};
```

