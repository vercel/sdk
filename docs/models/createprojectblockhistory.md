# CreateProjectBlockHistory


## Supported Types

### `models.CreateProjectBlockHistory1`

```typescript
const value: models.CreateProjectBlockHistory1 = {
  action: "blocked",
  reason: "<value>",
  statusCode: 5274.55,
  createdAt: 3444.61,
};
```

### `models.CreateProjectBlockHistory2`

```typescript
const value: models.CreateProjectBlockHistory2 = {
  action: "unblocked",
  createdAt: 3560.16,
};
```

### `models.CreateProjectBlockHistory3`

```typescript
const value: models.CreateProjectBlockHistory3 = {
  action: "route-blocked",
  route: {
    has: [],
    mitigate: {
      action: "block_legal_cwc",
    },
  },
  reason: "<value>",
  createdAt: 8396.94,
};
```

### `models.CreateProjectBlockHistory4`

```typescript
const value: models.CreateProjectBlockHistory4 = {
  action: "route-unblocked",
  route: {
    has: [
      {
        type: "host",
        value: {
          eq: "<value>",
        },
      },
    ],
    mitigate: {
      action: "block_legal_cwc",
    },
  },
  createdAt: 9559.06,
};
```

