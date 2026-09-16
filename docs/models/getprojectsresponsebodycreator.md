# GetProjectsResponseBodyCreator


## Supported Types

### `models.GetProjectsCreator1`

```typescript
const value: models.GetProjectsCreator1 = {
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

### `models.GetProjectsCreator2`

```typescript
const value: models.GetProjectsCreator2 = {
  app: {
    id: "<id>",
  },
  type: "app",
};
```

### `models.GetProjectsCreator3`

```typescript
const value: models.GetProjectsCreator3 = {
  integration: {
    configurationId: "<id>",
    integrationId: "<id>",
  },
  type: "integration",
};
```

### `models.GetProjectsCreator4`

```typescript
const value: models.GetProjectsCreator4 = {
  type: "system",
};
```

