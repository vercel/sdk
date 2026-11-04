# UpdateProjectPrincipal


## Supported Types

### `models.UpdateProjectPrincipal1`

```typescript
const value: models.UpdateProjectPrincipal1 = {
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

### `models.UpdateProjectPrincipal2`

```typescript
const value: models.UpdateProjectPrincipal2 = {
  project: {
    id: "<id>",
  },
  type: "project",
};
```

### `models.UpdateProjectPrincipal3`

```typescript
const value: models.UpdateProjectPrincipal3 = {
  app: {
    id: "<id>",
  },
  type: "app",
};
```

### `models.UpdateProjectPrincipal4`

```typescript
const value: models.UpdateProjectPrincipal4 = {
  integration: {
    configurationId: "<id>",
    integrationId: "<id>",
  },
  type: "integration",
};
```

### `models.UpdateProjectPrincipal5`

```typescript
const value: models.UpdateProjectPrincipal5 = {
  type: "system",
};
```

