# FlagOutcome


## Supported Types

### `models.Outcome1`

```typescript
const value: models.Outcome1 = {
  type: "variant",
  variantId: "<id>",
};
```

### `models.Outcome2`

```typescript
const value: models.Outcome2 = {
  base: {
    attribute: "<value>",
    kind: "<value>",
    type: "entity",
  },
  defaultVariantId: "<id>",
  type: "split",
  weights: {
    "key": 8936.73,
    "key1": 4237.14,
  },
};
```

### `models.Outcome3`

```typescript
const value: models.Outcome3 = {
  base: {
    attribute: "<value>",
    kind: "<value>",
    type: "entity",
  },
  defaultVariantId: "<id>",
  rollFromVariantId: "<id>",
  rollToVariantId: "<id>",
  slots: [],
  startTimestamp: 2535.43,
  type: "rollout",
};
```

### `models.Outcome4`

```typescript
const value: models.Outcome4 = {
  type: "experiment",
};
```

