# GetProjectPrincipal


## Supported Types

### `models.GetProjectPrincipal1`

```typescript
const value: models.GetProjectPrincipal1 = {
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

### `models.GetProjectPrincipal2`

```typescript
const value: models.GetProjectPrincipal2 = {
  project: {
    id: "<id>",
  },
  type: "project",
};
```

### `models.GetProjectPrincipal3`

```typescript
const value: models.GetProjectPrincipal3 = {
  app: {
    id: "<id>",
  },
  type: "app",
};
```

### `models.GetProjectPrincipal4`

```typescript
const value: models.GetProjectPrincipal4 = {
  integration: {
    configurationId: "<id>",
    integrationId: "<id>",
  },
  type: "integration",
};
```

### `models.GetProjectPrincipal5`

```typescript
const value: models.GetProjectPrincipal5 = {
  type: "system",
};
```

