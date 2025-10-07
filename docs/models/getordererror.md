# GetOrderError


## Supported Types

### `models.Error1`

```typescript
const value: models.Error1 = {
  code: "payment-failed",
};
```

### `models.Error2`

```typescript
const value: models.Error2 = {
  code: "tld-outage",
  details: {
    tlds: [],
  },
};
```

### `models.Error3`

```typescript
const value: models.Error3 = {
  code: "price-mismatch",
  details: {
    expectedPrice: 6162.82,
  },
};
```

### `models.Error4`

```typescript
const value: models.Error4 = {
  code: "unexpected-error",
};
```

