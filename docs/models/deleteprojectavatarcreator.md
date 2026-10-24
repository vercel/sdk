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
  project: {
    id: "<id>",
  },
  type: "project",
};
```

### `models.DeleteProjectAvatarCreator3`

```typescript
const value: models.DeleteProjectAvatarCreator3 = {
  app: {
    id: "<id>",
  },
  type: "app",
};
```

### `models.DeleteProjectAvatarCreator4`

```typescript
const value: models.DeleteProjectAvatarCreator4 = {
  integration: {
    configurationId: "<id>",
    integrationId: "<id>",
  },
  type: "integration",
};
```

### `models.DeleteProjectAvatarCreator5`

```typescript
const value: models.DeleteProjectAvatarCreator5 = {
  type: "system",
};
```

