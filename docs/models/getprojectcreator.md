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
  project: {
    id: "<id>",
  },
  type: "project",
};
```

### `models.GetProjectCreator3`

```typescript
const value: models.GetProjectCreator3 = {
  app: {
    id: "<id>",
  },
  type: "app",
};
```

### `models.GetProjectCreator4`

```typescript
const value: models.GetProjectCreator4 = {
  integration: {
    configurationId: "<id>",
    integrationId: "<id>",
  },
  type: "integration",
};
```

### `models.GetProjectCreator5`

```typescript
const value: models.GetProjectCreator5 = {
  type: "system",
};
```

