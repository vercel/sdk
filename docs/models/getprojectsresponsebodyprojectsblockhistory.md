# GetProjectsResponseBodyProjectsBlockHistory


## Supported Types

### `models.GetProjectsBlockHistoryProjects1`

```typescript
const value: models.GetProjectsBlockHistoryProjects1 = {
  action: "blocked",
  reason: "<value>",
  statusCode: 9460.54,
  createdAt: 2117.58,
};
```

### `models.GetProjectsBlockHistoryProjects2`

```typescript
const value: models.GetProjectsBlockHistoryProjects2 = {
  action: "unblocked",
  createdAt: 3700.08,
};
```

### `models.GetProjectsBlockHistoryProjects3`

```typescript
const value: models.GetProjectsBlockHistoryProjects3 = {
  action: "route-blocked",
  route: {
    src: "<value>",
    status: 5533.57,
  },
  reason: "<value>",
  createdAt: 2165.59,
};
```

### `models.GetProjectsBlockHistoryProjects4`

```typescript
const value: models.GetProjectsBlockHistoryProjects4 = {
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
  createdAt: 8632.82,
};
```

