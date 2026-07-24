# GetMicrofrontendsInGroupCreator


## Supported Types

### `models.GetMicrofrontendsInGroupCreator1`

```typescript
const value: models.GetMicrofrontendsInGroupCreator1 = {
  type: "user",
  via: {
    type: "integration",
    integration: {
      integrationId: "<id>",
      configurationId: "<id>",
    },
  },
  user: {
    id: "<id>",
  },
};
```

### `models.GetMicrofrontendsInGroupCreator2`

```typescript
const value: models.GetMicrofrontendsInGroupCreator2 = {
  type: "app",
  app: {
    id: "<id>",
  },
};
```

### `models.GetMicrofrontendsInGroupCreator3`

```typescript
const value: models.GetMicrofrontendsInGroupCreator3 = {
  type: "integration",
  integration: {
    integrationId: "<id>",
    configurationId: "<id>",
  },
};
```

### `models.GetMicrofrontendsInGroupCreator4`

```typescript
const value: models.GetMicrofrontendsInGroupCreator4 = {
  type: "system",
};
```

