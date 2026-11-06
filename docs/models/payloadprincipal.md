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

### `models.UserEventPrincipal5`

```typescript
const value: models.UserEventPrincipal5 = {
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

