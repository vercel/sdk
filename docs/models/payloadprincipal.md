# PayloadPrincipal


## Supported Types

### `models.UserEventPrincipal1`

```typescript
const value: models.UserEventPrincipal1 = {
  project: {
    id: "<id>",
  },
  type: "project",
};
```

### `models.UserEventPrincipal2`

```typescript
const value: models.UserEventPrincipal2 = {
  app: {
    id: "<id>",
  },
  type: "app",
};
```

### `models.UserEventPrincipal3`

```typescript
const value: models.UserEventPrincipal3 = {
  integration: {
    configurationId: "<id>",
    integrationId: "<id>",
  },
  type: "integration",
};
```

### `models.UserEventPrincipal4`

```typescript
const value: models.UserEventPrincipal4 = {
  type: "system",
};
```

### `models.Principal5`

```typescript
const value: models.Principal5 = {
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

