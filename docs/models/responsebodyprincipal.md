# ResponseBodyPrincipal


## Supported Types

### `models.GetProjectsPrincipal1`

```typescript
const value: models.GetProjectsPrincipal1 = {
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

### `models.GetProjectsPrincipal2`

```typescript
const value: models.GetProjectsPrincipal2 = {
  project: {
    id: "<id>",
  },
  type: "project",
};
```

### `models.GetProjectsPrincipal3`

```typescript
const value: models.GetProjectsPrincipal3 = {
  app: {
    id: "<id>",
  },
  type: "app",
};
```

### `models.GetProjectsPrincipal4`

```typescript
const value: models.GetProjectsPrincipal4 = {
  integration: {
    configurationId: "<id>",
    integrationId: "<id>",
  },
  type: "integration",
};
```

### `models.GetProjectsPrincipal5`

```typescript
const value: models.GetProjectsPrincipal5 = {
  type: "system",
};
```

