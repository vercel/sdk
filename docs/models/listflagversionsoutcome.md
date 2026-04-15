# ListFlagVersionsOutcome


## Supported Types

### `models.ListFlagVersionsOutcome1`

```typescript
const value: models.ListFlagVersionsOutcome1 = {
  type: "variant",
  variantId: "<id>",
};
```

### `models.ListFlagVersionsOutcome2`

```typescript
const value: models.ListFlagVersionsOutcome2 = {
  type: "split",
  base: {
    type: "entity",
    kind: "<value>",
    attribute: "<value>",
  },
  weights: {
    "key": 2789.66,
  },
  defaultVariantId: "<id>",
};
```

### `models.ListFlagVersionsOutcome3`

```typescript
const value: models.ListFlagVersionsOutcome3 = {
  type: "rollout",
  base: {
    type: "entity",
    kind: "<value>",
    attribute: "<value>",
  },
  defaultVariantId: "<id>",
  startTimestamp: 6729.99,
  rollFromVariantId: "<id>",
  rollToVariantId: "<id>",
  slots: [
    {
      promille: 2557.11,
      durationMs: 4705.48,
    },
  ],
};
```

