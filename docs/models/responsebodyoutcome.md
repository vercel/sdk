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

