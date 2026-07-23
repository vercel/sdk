# CreateProjectCreator


## Supported Types

### `models.Creator1`

```typescript
const value: models.Creator1 = {
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

### `models.Creator2`

```typescript
const value: models.Creator2 = {
  type: "app",
  app: {
    id: "<id>",
  },
};
```

### `models.Creator3`

```typescript
const value: models.Creator3 = {
  type: "integration",
  integration: {
    integrationId: "<id>",
    configurationId: "<id>",
  },
};
```

### `models.Creator4`

```typescript
const value: models.Creator4 = {
  type: "system",
};
```

