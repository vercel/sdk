# UpdateProjectCreator


## Supported Types

### `models.UpdateProjectCreator1`

```typescript
const value: models.UpdateProjectCreator1 = {
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

### `models.UpdateProjectCreator2`

```typescript
const value: models.UpdateProjectCreator2 = {
  project: {
    id: "<id>",
  },
  type: "project",
};
```

### `models.UpdateProjectCreator3`

```typescript
const value: models.UpdateProjectCreator3 = {
  app: {
    id: "<id>",
  },
  type: "app",
};
```

### `models.UpdateProjectCreator4`

```typescript
const value: models.UpdateProjectCreator4 = {
  integration: {
    configurationId: "<id>",
    integrationId: "<id>",
  },
  type: "integration",
};
```

### `models.UpdateProjectCreator5`

```typescript
const value: models.UpdateProjectCreator5 = {
  type: "system",
};
```

