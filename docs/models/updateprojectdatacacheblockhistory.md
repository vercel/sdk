# UpdateProjectDataCacheBlockHistory


## Supported Types

### `models.BlockHistory1`

```typescript
const value: models.BlockHistory1 = {
  action: "blocked",
  reason: "<value>",
  statusCode: 7635.45,
  createdAt: 5035.25,
};
```

### `models.BlockHistory2`

```typescript
const value: models.BlockHistory2 = {
  action: "unblocked",
  createdAt: 1206.28,
};
```

### `models.BlockHistory3`

```typescript
const value: models.BlockHistory3 = {
  action: "route-blocked",
  route: {
    src: "<value>",
    status: 8677.85,
  },
  reason: "<value>",
  createdAt: 8082.76,
};
```

### `models.BlockHistory4`

```typescript
const value: models.BlockHistory4 = {
  action: "route-unblocked",
  route: {
    has: [],
    mitigate: {
      action: "block_legal_cwc",
    },
  },
  createdAt: 1752.63,
};
```

