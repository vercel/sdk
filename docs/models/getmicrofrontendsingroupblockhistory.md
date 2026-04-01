# GetMicrofrontendsInGroupBlockHistory


## Supported Types

### `models.GetMicrofrontendsInGroupBlockHistory1`

```typescript
const value: models.GetMicrofrontendsInGroupBlockHistory1 = {
  action: "blocked",
  reason: "<value>",
  statusCode: 6561.38,
  createdAt: 983.18,
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
  reason: "<value>",
  createdAt: 6838.43,
};
```

### `models.GetMicrofrontendsInGroupBlockHistory4`

```typescript
const value: models.GetMicrofrontendsInGroupBlockHistory4 = {
  action: "route-unblocked",
  route: {
    src: "<value>",
    status: 5495.08,
  },
  createdAt: 5016.95,
};
```

