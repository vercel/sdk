# UpdateProjectCreator


## Supported Types

### `models.UpdateProjectCreator1`

```typescript
const value: models.UpdateProjectCreator1 = {
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

### `models.UpdateProjectCreator2`

```typescript
const value: models.UpdateProjectCreator2 = {
  type: "app",
  app: {
    id: "<id>",
  },
};
```

### `models.UpdateProjectCreator3`

```typescript
const value: models.UpdateProjectCreator3 = {
  type: "integration",
  integration: {
    integrationId: "<id>",
    configurationId: "<id>",
  },
};
```

### `models.UpdateProjectCreator4`

```typescript
const value: models.UpdateProjectCreator4 = {
  type: "system",
};
```

