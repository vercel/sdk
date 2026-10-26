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
  project: {
    id: "<id>",
  },
  type: "project",
};
```

### `models.GetProjectsCreator3`

```typescript
const value: models.GetProjectsCreator3 = {
  app: {
    id: "<id>",
  },
  type: "app",
};
```

### `models.GetProjectsCreator4`

```typescript
const value: models.GetProjectsCreator4 = {
  integration: {
    configurationId: "<id>",
    integrationId: "<id>",
  },
  type: "integration",
};
```

### `models.GetProjectsCreator5`

```typescript
const value: models.GetProjectsCreator5 = {
  type: "system",
};
```

