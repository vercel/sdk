# UpdateProjectBlockHistory


## Supported Types

### `models.UpdateProjectBlockHistory1`

```typescript
const value: models.UpdateProjectBlockHistory1 = {
  action: "blocked",
  createdAt: 9457.82,
  reason: "<value>",
  statusCode: 6178.34,
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
  createdAt: 2767.46,
  reason: "<value>",
  route: {
    has: [
      {
        key: "x-vercel-ip-country",
        type: "header",
        value: {
          eq: "<value>",
        },
      },
    ],
    mitigate: {
      action: "block_legal_cwc",
    },
  },
};
```

### `models.UpdateProjectBlockHistory4`

```typescript
const value: models.UpdateProjectBlockHistory4 = {
  action: "route-unblocked",
  createdAt: 6185.55,
  route: {
    has: [],
    mitigate: {
      action: "block_legal_cwc",
    },
  },
};
```

