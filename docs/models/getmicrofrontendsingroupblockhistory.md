# GetMicrofrontendsInGroupBlockHistory


## Supported Types

### `models.GetMicrofrontendsInGroupBlockHistory1`

```typescript
const value: models.GetMicrofrontendsInGroupBlockHistory1 = {
  action: "blocked",
  createdAt: 6561.38,
  reason: "<value>",
  statusCode: 983.18,
};
```

### `models.GetMicrofrontendsInGroupBlockHistory2`

```typescript
const value: models.GetMicrofrontendsInGroupBlockHistory2 = {
  action: "unblocked",
  createdAt: 9533.91,
};
```

### `models.GetMicrofrontendsInGroupBlockHistory3`

```typescript
const value: models.GetMicrofrontendsInGroupBlockHistory3 = {
  action: "route-blocked",
  createdAt: 8762.56,
  reason: "<value>",
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
};
```

### `models.GetMicrofrontendsInGroupBlockHistory4`

```typescript
const value: models.GetMicrofrontendsInGroupBlockHistory4 = {
  action: "route-unblocked",
  createdAt: 3199.53,
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

