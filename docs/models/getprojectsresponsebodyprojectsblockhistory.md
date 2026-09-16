# GetProjectsResponseBodyProjectsBlockHistory


## Supported Types

### `models.GetProjectsBlockHistoryProjectsResponse1`

```typescript
const value: models.GetProjectsBlockHistoryProjectsResponse1 = {
  action: "blocked",
  createdAt: 4808.42,
  reason: "<value>",
  statusCode: 9677.51,
};
```

### `models.GetProjectsBlockHistoryProjectsResponse2`

```typescript
const value: models.GetProjectsBlockHistoryProjectsResponse2 = {
  action: "unblocked",
  createdAt: 3923.15,
};
```

### `models.GetProjectsBlockHistoryProjectsResponse3`

```typescript
const value: models.GetProjectsBlockHistoryProjectsResponse3 = {
  action: "route-blocked",
  createdAt: 8374.41,
  reason: "<value>",
  route: {
    has: [],
    mitigate: {
      action: "block_legal_cwc",
    },
  },
};
```

### `models.GetProjectsBlockHistoryProjectsResponse4`

```typescript
const value: models.GetProjectsBlockHistoryProjectsResponse4 = {
  action: "route-unblocked",
  createdAt: 5326.03,
  route: {
    has: [],
    mitigate: {
      action: "block_legal_cwc",
    },
  },
};
```

