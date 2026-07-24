# UpdateMicrofrontendsCreator


## Supported Types

### `models.UpdateMicrofrontendsCreator1`

```typescript
const value: models.UpdateMicrofrontendsCreator1 = {
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

### `models.UpdateMicrofrontendsCreator2`

```typescript
const value: models.UpdateMicrofrontendsCreator2 = {
  type: "app",
  app: {
    id: "<id>",
  },
};
```

### `models.UpdateMicrofrontendsCreator3`

```typescript
const value: models.UpdateMicrofrontendsCreator3 = {
  type: "integration",
  integration: {
    integrationId: "<id>",
    configurationId: "<id>",
  },
};
```

### `models.UpdateMicrofrontendsCreator4`

```typescript
const value: models.UpdateMicrofrontendsCreator4 = {
  type: "system",
};
```

