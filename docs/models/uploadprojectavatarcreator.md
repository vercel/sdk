# UploadProjectAvatarCreator


## Supported Types

### `models.UploadProjectAvatarCreator1`

```typescript
const value: models.UploadProjectAvatarCreator1 = {
  type: "user",
  via: {
    app: {
      id: "<id>",
    },
    type: "app",
  },
  user: {
    id: "<id>",
  },
};
```

### `models.UploadProjectAvatarCreator2`

```typescript
const value: models.UploadProjectAvatarCreator2 = {
  app: {
    id: "<id>",
  },
  type: "app",
};
```

### `models.UploadProjectAvatarCreator3`

```typescript
const value: models.UploadProjectAvatarCreator3 = {
  integration: {
    configurationId: "<id>",
    integrationId: "<id>",
  },
  type: "integration",
};
```

### `models.UploadProjectAvatarCreator4`

```typescript
const value: models.UploadProjectAvatarCreator4 = {
  type: "system",
};
```

