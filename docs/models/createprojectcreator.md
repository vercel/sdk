# CreateProjectCreator


## Supported Types

### `models.Creator1`

```typescript
const value: models.Creator1 = {
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

### `models.Creator2`

```typescript
const value: models.Creator2 = {
  app: {
    id: "<id>",
  },
  type: "app",
};
```

### `models.Creator3`

```typescript
const value: models.Creator3 = {
  integration: {
    configurationId: "<id>",
    integrationId: "<id>",
  },
  type: "integration",
};
```

### `models.Creator4`

```typescript
const value: models.Creator4 = {
  type: "system",
};
```

