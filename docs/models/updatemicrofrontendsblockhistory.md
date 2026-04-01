# UpdateMicrofrontendsBlockHistory


## Supported Types

### `models.UpdateMicrofrontendsBlockHistory1`

```typescript
const value: models.UpdateMicrofrontendsBlockHistory1 = {
  action: "blocked",
  reason: "<value>",
  statusCode: 8310.26,
  createdAt: 1224.12,
};
```

### `models.UpdateMicrofrontendsBlockHistory2`

```typescript
const value: models.UpdateMicrofrontendsBlockHistory2 = {
  action: "unblocked",
  createdAt: 3511.17,
};
```

### `models.UpdateMicrofrontendsBlockHistory3`

```typescript
const value: models.UpdateMicrofrontendsBlockHistory3 = {
  action: "route-blocked",
  route: {
    has: [],
    mitigate: {
      action: "block_legal_cwc",
    },
  },
  reason: "<value>",
  createdAt: 9290.74,
};
```

### `models.UpdateMicrofrontendsBlockHistory4`

```typescript
const value: models.UpdateMicrofrontendsBlockHistory4 = {
  action: "route-unblocked",
  route: {
    src: "<value>",
    status: 1464.99,
  },
  createdAt: 7670.1,
};
```

