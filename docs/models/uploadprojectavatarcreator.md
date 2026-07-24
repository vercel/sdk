# UploadProjectAvatarCreator


## Supported Types

### `models.UploadProjectAvatarCreator1`

```typescript
const value: models.UploadProjectAvatarCreator1 = {
  type: "user",
  via: {
    type: "app",
    app: {
      id: "<id>",
    },
  },
  user: {
    id: "<id>",
  },
};
```

### `models.UploadProjectAvatarCreator2`

```typescript
const value: models.UploadProjectAvatarCreator2 = {
  type: "app",
  app: {
    id: "<id>",
  },
};
```

### `models.UploadProjectAvatarCreator3`

```typescript
const value: models.UploadProjectAvatarCreator3 = {
  type: "integration",
  integration: {
    integrationId: "<id>",
    configurationId: "<id>",
  },
};
```

### `models.UploadProjectAvatarCreator4`

```typescript
const value: models.UploadProjectAvatarCreator4 = {
  type: "system",
};
```

