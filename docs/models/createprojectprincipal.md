# CreateProjectPrincipal


## Supported Types

### `models.CreateProjectPrincipal1`

```typescript
const value: models.CreateProjectPrincipal1 = {
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

### `models.CreateProjectPrincipal2`

```typescript
const value: models.CreateProjectPrincipal2 = {
  project: {
    id: "<id>",
  },
  type: "project",
};
```

### `models.CreateProjectPrincipal3`

```typescript
const value: models.CreateProjectPrincipal3 = {
  app: {
    id: "<id>",
  },
  type: "app",
};
```

### `models.CreateProjectPrincipal4`

```typescript
const value: models.CreateProjectPrincipal4 = {
  integration: {
    configurationId: "<id>",
    integrationId: "<id>",
  },
  type: "integration",
};
```

### `models.CreateProjectPrincipal5`

```typescript
const value: models.CreateProjectPrincipal5 = {
  type: "system",
};
```

