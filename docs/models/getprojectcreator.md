# GetProjectCreator


## Supported Types

### `models.GetProjectCreator1`

```typescript
const value: models.GetProjectCreator1 = {
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

### `models.GetProjectCreator2`

```typescript
const value: models.GetProjectCreator2 = {
  app: {
    id: "<id>",
  },
  type: "app",
};
```

### `models.GetProjectCreator3`

```typescript
const value: models.GetProjectCreator3 = {
  integration: {
    configurationId: "<id>",
    integrationId: "<id>",
  },
  type: "integration",
};
```

### `models.GetProjectCreator4`

```typescript
const value: models.GetProjectCreator4 = {
  type: "system",
};
```

