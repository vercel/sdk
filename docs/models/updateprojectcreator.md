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
  app: {
    id: "<id>",
  },
  type: "app",
};
```

### `models.UpdateProjectCreator3`

```typescript
const value: models.UpdateProjectCreator3 = {
  integration: {
    configurationId: "<id>",
    integrationId: "<id>",
  },
  type: "integration",
};
```

### `models.UpdateProjectCreator4`

```typescript
const value: models.UpdateProjectCreator4 = {
  type: "system",
};
```

