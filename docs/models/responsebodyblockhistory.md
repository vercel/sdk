# ResponseBodyBlockHistory


## Supported Types

### `models.GetProjectsBlockHistory1`

```typescript
const value: models.GetProjectsBlockHistory1 = {
  action: "blocked",
  reason: "<value>",
  statusCode: 2902.14,
  createdAt: 1211.81,
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
  route: {
    src: "<value>",
    status: 3830.55,
  },
  reason: "<value>",
  createdAt: 5491.52,
};
```

### `models.GetProjectsBlockHistory4`

```typescript
const value: models.GetProjectsBlockHistory4 = {
  action: "route-unblocked",
  route: {
    src: "<value>",
    status: 8911.94,
  },
  createdAt: 3845.17,
};
```

