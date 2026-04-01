# UpdateMicrofrontendsBlockHistoryRoute


## Supported Types

### `models.UpdateMicrofrontendsRoute1`

```typescript
const value: models.UpdateMicrofrontendsRoute1 = {
  src: "<value>",
  status: 657.62,
};
```

### `models.UpdateMicrofrontendsRoute2`

```typescript
const value: models.UpdateMicrofrontendsRoute2 = {
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

