# GetProjectsResponseBodyCreator


## Supported Types

### `models.GetProjectsCreator1`

```typescript
const value: models.GetProjectsCreator1 = {
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

### `models.GetProjectsCreator2`

```typescript
const value: models.GetProjectsCreator2 = {
  type: "app",
  app: {
    id: "<id>",
  },
};
```

### `models.GetProjectsCreator3`

```typescript
const value: models.GetProjectsCreator3 = {
  type: "integration",
  integration: {
    integrationId: "<id>",
    configurationId: "<id>",
  },
};
```

### `models.GetProjectsCreator4`

```typescript
const value: models.GetProjectsCreator4 = {
  type: "system",
};
```

