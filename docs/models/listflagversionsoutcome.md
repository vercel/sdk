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

