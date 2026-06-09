# UploadProjectAvatarBlockHistory


## Supported Types

### `models.UploadProjectAvatarBlockHistory1`

```typescript
const value: models.UploadProjectAvatarBlockHistory1 = {
  action: "blocked",
  reason: "<value>",
  statusCode: 2996.64,
  createdAt: 2226.2,
};
```

### `models.UploadProjectAvatarBlockHistory2`

```typescript
const value: models.UploadProjectAvatarBlockHistory2 = {
  action: "unblocked",
  createdAt: 390.96,
};
```

### `models.UploadProjectAvatarBlockHistory3`

```typescript
const value: models.UploadProjectAvatarBlockHistory3 = {
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
  createdAt: 1981.14,
};
```

### `models.UploadProjectAvatarBlockHistory4`

```typescript
const value: models.UploadProjectAvatarBlockHistory4 = {
  action: "route-unblocked",
  route: {
    src: "<value>",
    status: 172.55,
  },
  createdAt: 6918.47,
};
```

