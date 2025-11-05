# Error1


## Supported Types

### `models.GetOrder11`

```typescript
const value: models.GetOrder11 = {
  code: "payment-failed",
};
```

### `models.GetOrder12`

```typescript
const value: models.GetOrder12 = {
  code: "tld-outage",
  details: {
    tlds: [
      {
        tldName: "<value>",
        endsAt: "<value>",
      },
    ],
  },
};
```

### `models.GetOrder13`

```typescript
const value: models.GetOrder13 = {
  code: "price-mismatch",
  details: {
    expectedPrice: 6230.96,
  },
};
```

### `models.One4`

```typescript
const value: models.One4 = {
  code: "unexpected-error",
};
```

