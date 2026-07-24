# GetProjectCreator


## Supported Types

### `models.GetProjectCreator1`

```typescript
const value: models.GetProjectCreator1 = {
  type: "user",
  via: {
    type: "integration",
    integration: {
      integrationId: "<id>",
      configurationId: "<id>",
    },
  },
  user: {
    id: "<id>",
  },
};
```

### `models.GetProjectCreator2`

```typescript
const value: models.GetProjectCreator2 = {
  type: "app",
  app: {
    id: "<id>",
  },
};
```

### `models.GetProjectCreator3`

```typescript
const value: models.GetProjectCreator3 = {
  type: "integration",
  integration: {
    integrationId: "<id>",
    configurationId: "<id>",
  },
};
```

### `models.GetProjectCreator4`

```typescript
const value: models.GetProjectCreator4 = {
  type: "system",
};
```

