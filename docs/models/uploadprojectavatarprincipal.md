# UploadProjectAvatarPrincipal


## Supported Types

### `models.UploadProjectAvatarPrincipal1`

```typescript
const value: models.UploadProjectAvatarPrincipal1 = {
  type: "user",
  via: {
    integration: {
      configurationId: "<id>",
      integrationId: "<id>",
    },
    type: "integration",
  },
  user: {
    id: "<id>",
  },
};
```

### `models.UploadProjectAvatarPrincipal2`

```typescript
const value: models.UploadProjectAvatarPrincipal2 = {
  project: {
    id: "<id>",
  },
  type: "project",
};
```

### `models.UploadProjectAvatarPrincipal3`

```typescript
const value: models.UploadProjectAvatarPrincipal3 = {
  app: {
    id: "<id>",
  },
  type: "app",
};
```

### `models.UploadProjectAvatarPrincipal4`

```typescript
const value: models.UploadProjectAvatarPrincipal4 = {
  integration: {
    configurationId: "<id>",
    integrationId: "<id>",
  },
  type: "integration",
};
```

### `models.UploadProjectAvatarPrincipal5`

```typescript
const value: models.UploadProjectAvatarPrincipal5 = {
  type: "system",
};
```

