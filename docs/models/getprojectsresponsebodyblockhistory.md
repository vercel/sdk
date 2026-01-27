# GetProjectsResponseBodyBlockHistory


## Supported Types

### `models.GetProjectsBlockHistoryProjectsResponse1`

```typescript
const value: models.GetProjectsBlockHistoryProjectsResponse1 = {
  action: "blocked",
  reason: "<value>",
  statusCode: 4808.42,
  createdAt: 9677.51,
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
  route: {
    has: [
      {
        type: "header",
        key: "x-vercel-ip-country",
        value: {
          eq: "<value>",
        },
      },
    ],
    mitigate: {
      action: "block_legal_cwc",
    },
  },
  reason: "<value>",
  createdAt: 7229.26,
};
```

### `models.GetProjectsBlockHistoryProjectsResponse4`

```typescript
const value: models.GetProjectsBlockHistoryProjectsResponse4 = {
  action: "route-unblocked",
  route: {
    has: [
      {
        type: "header",
        key: "x-vercel-ip-country",
        value: {
          eq: "<value>",
        },
      },
    ],
    mitigate: {
      action: "block_legal_cwc",
    },
  },
  createdAt: 300.19,
};
```

