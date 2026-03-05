# GetProjectsBlockHistoryRoute


## Supported Types

### `models.GetProjectsRoute1`

```typescript
const value: models.GetProjectsRoute1 = {
  src: "<value>",
  status: 5428.07,
};
```

### `models.GetProjectsRoute2`

```typescript
const value: models.GetProjectsRoute2 = {
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
};
```

