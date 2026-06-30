# GetProjectBlockHistory


## Supported Types

### `models.GetProjectBlockHistory1`

```typescript
const value: models.GetProjectBlockHistory1 = {
  action: "blocked",
  reason: "<value>",
  statusCode: 229.72,
  createdAt: 6831.27,
};
```

### `models.GetProjectBlockHistory2`

```typescript
const value: models.GetProjectBlockHistory2 = {
  action: "unblocked",
  createdAt: 5519.56,
};
```

### `models.GetProjectBlockHistory3`

```typescript
const value: models.GetProjectBlockHistory3 = {
  action: "route-blocked",
  route: {
    has: [],
    mitigate: {
      action: "block_legal_cwc",
    },
  },
  reason: "<value>",
  createdAt: 970.47,
};
```

### `models.GetProjectBlockHistory4`

```typescript
const value: models.GetProjectBlockHistory4 = {
  action: "route-unblocked",
  route: {
    has: [],
    mitigate: {
      action: "block_legal_cwc",
    },
  },
  createdAt: 1146.31,
};
```

