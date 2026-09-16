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
  base: {
    attribute: "<value>",
    kind: "<value>",
    type: "entity",
  },
  defaultVariantId: "<id>",
  type: "split",
  weights: {
    "key": 2789.66,
  },
};
```

### `models.ListFlagVersionsOutcome3`

```typescript
const value: models.ListFlagVersionsOutcome3 = {
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
      durationMs: 6663.21,
      promille: 2557.11,
    },
  ],
  startTimestamp: 4705.48,
  type: "rollout",
};
```

### `models.ListFlagVersionsOutcome4`

```typescript
const value: models.ListFlagVersionsOutcome4 = {
  type: "experiment",
};
```

