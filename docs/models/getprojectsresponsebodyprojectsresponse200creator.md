# GetProjectsResponseBodyProjectsResponse200Creator


## Supported Types

### `models.GetProjectsCreatorProjects1`

```typescript
const value: models.GetProjectsCreatorProjects1 = {
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

### `models.GetProjectsCreatorProjects2`

```typescript
const value: models.GetProjectsCreatorProjects2 = {
  type: "app",
  app: {
    id: "<id>",
  },
};
```

### `models.GetProjectsCreatorProjects3`

```typescript
const value: models.GetProjectsCreatorProjects3 = {
  type: "integration",
  integration: {
    integrationId: "<id>",
    configurationId: "<id>",
  },
};
```

### `models.GetProjectsCreatorProjects4`

```typescript
const value: models.GetProjectsCreatorProjects4 = {
  type: "system",
};
```

