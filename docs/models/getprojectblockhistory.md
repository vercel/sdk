# GetProjectBlockHistory


## Supported Types

### `models.GetProjectBlockHistory1`

```typescript
const value: models.GetProjectBlockHistory1 = {
  action: "blocked",
  createdAt: 229.72,
  reason: "<value>",
  statusCode: 6831.27,
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
  createdAt: 5947.11,
  reason: "<value>",
  route: {
    src: "<value>",
    status: 970.47,
  },
};
```

### `models.GetProjectBlockHistory4`

```typescript
const value: models.GetProjectBlockHistory4 = {
  action: "route-unblocked",
  createdAt: 9623.05,
  route: {
    src: "<value>",
    status: 1146.31,
  },
};
```

