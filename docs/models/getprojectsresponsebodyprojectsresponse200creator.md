# GetProjectsResponseBodyProjectsResponse200Creator


## Supported Types

### `models.GetProjectsCreatorProjects1`

```typescript
const value: models.GetProjectsCreatorProjects1 = {
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

### `models.GetProjectsCreatorProjects2`

```typescript
const value: models.GetProjectsCreatorProjects2 = {
  app: {
    id: "<id>",
  },
  type: "app",
};
```

### `models.GetProjectsCreatorProjects3`

```typescript
const value: models.GetProjectsCreatorProjects3 = {
  integration: {
    configurationId: "<id>",
    integrationId: "<id>",
  },
  type: "integration",
};
```

### `models.GetProjectsCreatorProjects4`

```typescript
const value: models.GetProjectsCreatorProjects4 = {
  type: "system",
};
```

