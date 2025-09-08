# UpdateProjectBlockHistory


## Supported Types

### `models.UpdateProjectBlockHistory1`

```typescript
const value: models.UpdateProjectBlockHistory1 = {
  action: "blocked",
  reason: "<value>",
  statusCode: 9457.82,
  createdAt: 6178.34,
};
```

### `models.UpdateProjectBlockHistory2`

```typescript
const value: models.UpdateProjectBlockHistory2 = {
  action: "unblocked",
  createdAt: 8599.47,
};
```

### `models.UpdateProjectBlockHistory3`

```typescript
const value: models.UpdateProjectBlockHistory3 = {
  action: "route-blocked",
  route: {
    src: "<value>",
    status: 5377.98,
  },
  reason: "<value>",
  createdAt: 8650.96,
};
```

### `models.UpdateProjectBlockHistory4`

```typescript
const value: models.UpdateProjectBlockHistory4 = {
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
  createdAt: 207.55,
};
```

