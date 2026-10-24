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
  project: {
    id: "<id>",
  },
  type: "project",
};
```

### `models.GetProjectsCreatorProjects3`

```typescript
const value: models.GetProjectsCreatorProjects3 = {
  app: {
    id: "<id>",
  },
  type: "app",
};
```

### `models.GetProjectsCreatorProjects4`

```typescript
const value: models.GetProjectsCreatorProjects4 = {
  integration: {
    configurationId: "<id>",
    integrationId: "<id>",
  },
  type: "integration",
};
```

### `models.GetProjectsCreatorProjects5`

```typescript
const value: models.GetProjectsCreatorProjects5 = {
  type: "system",
};
```

