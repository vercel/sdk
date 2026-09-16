# CreateProjectBlockHistory


## Supported Types

### `models.BlockHistory1`

```typescript
const value: models.BlockHistory1 = {
  action: "blocked",
  createdAt: 7635.45,
  reason: "<value>",
  statusCode: 5035.25,
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
  createdAt: 120.75,
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

### `models.BlockHistory4`

```typescript
const value: models.BlockHistory4 = {
  action: "route-unblocked",
  createdAt: 6252.8,
  route: {
    src: "<value>",
    status: 1752.63,
  },
};
```

