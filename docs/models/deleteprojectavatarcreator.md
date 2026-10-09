# DeleteProjectAvatarCreator


## Supported Types

### `models.DeleteProjectAvatarCreator1`

```typescript
const value: models.DeleteProjectAvatarCreator1 = {
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

### `models.DeleteProjectAvatarCreator2`

```typescript
const value: models.DeleteProjectAvatarCreator2 = {
  app: {
    id: "<id>",
  },
  type: "app",
};
```

### `models.DeleteProjectAvatarCreator3`

```typescript
const value: models.DeleteProjectAvatarCreator3 = {
  integration: {
    configurationId: "<id>",
    integrationId: "<id>",
  },
  type: "integration",
};
```

### `models.DeleteProjectAvatarCreator4`

```typescript
const value: models.DeleteProjectAvatarCreator4 = {
  type: "system",
};
```

