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
  project: {
    id: "<id>",
  },
  type: "project",
};
```

### `models.UploadProjectAvatarCreator3`

```typescript
const value: models.UploadProjectAvatarCreator3 = {
  app: {
    id: "<id>",
  },
  type: "app",
};
```

### `models.UploadProjectAvatarCreator4`

```typescript
const value: models.UploadProjectAvatarCreator4 = {
  integration: {
    configurationId: "<id>",
    integrationId: "<id>",
  },
  type: "integration",
};
```

### `models.UploadProjectAvatarCreator5`

```typescript
const value: models.UploadProjectAvatarCreator5 = {
  type: "system",
};
```

