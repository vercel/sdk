# ResponseBodyBlockHistory


## Supported Types

### `models.GetProjectsBlockHistory1`

```typescript
const value: models.GetProjectsBlockHistory1 = {
  action: "blocked",
  createdAt: 2902.14,
  reason: "<value>",
  statusCode: 1211.81,
};
```

### `models.GetProjectsBlockHistory2`

```typescript
const value: models.GetProjectsBlockHistory2 = {
  action: "unblocked",
  createdAt: 7151.4,
};
```

### `models.GetProjectsBlockHistory3`

```typescript
const value: models.GetProjectsBlockHistory3 = {
  action: "route-blocked",
  createdAt: 3558.85,
  reason: "<value>",
  route: {
    src: "<value>",
    status: 5491.52,
  },
};
```

### `models.GetProjectsBlockHistory4`

```typescript
const value: models.GetProjectsBlockHistory4 = {
  action: "route-unblocked",
  createdAt: 2387.06,
  route: {
    has: [],
    mitigate: {
      action: "block_legal_cwc",
    },
  },
};
```

