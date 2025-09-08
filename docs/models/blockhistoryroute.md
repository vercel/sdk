# BlockHistoryRoute


## Supported Types

### `models.UpdateProjectDataCacheRoute1`

```typescript
const value: models.UpdateProjectDataCacheRoute1 = {
  src: "<value>",
  status: 379.06,
};
```

### `models.UpdateProjectDataCacheRoute2`

```typescript
const value: models.UpdateProjectDataCacheRoute2 = {
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
};
```

