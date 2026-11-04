# DeleteProjectAvatarPrincipal


## Supported Types

### `models.DeleteProjectAvatarPrincipal1`

```typescript
const value: models.DeleteProjectAvatarPrincipal1 = {
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

### `models.DeleteProjectAvatarPrincipal2`

```typescript
const value: models.DeleteProjectAvatarPrincipal2 = {
  project: {
    id: "<id>",
  },
  type: "project",
};
```

### `models.DeleteProjectAvatarPrincipal3`

```typescript
const value: models.DeleteProjectAvatarPrincipal3 = {
  app: {
    id: "<id>",
  },
  type: "app",
};
```

### `models.DeleteProjectAvatarPrincipal4`

```typescript
const value: models.DeleteProjectAvatarPrincipal4 = {
  integration: {
    configurationId: "<id>",
    integrationId: "<id>",
  },
  type: "integration",
};
```

### `models.DeleteProjectAvatarPrincipal5`

```typescript
const value: models.DeleteProjectAvatarPrincipal5 = {
  type: "system",
};
```

