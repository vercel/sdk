# GetDeploymentEventsResponseBody3


## Supported Types

### `models.Three1`

```typescript
const value: models.Three1 = {
  type: "delimiter",
  created: 4034.37,
  payload: {
    deploymentId: "<id>",
    id: "<id>",
    date: 5232.2,
    serial: "<value>",
  },
};
```

### `models.Three2`

```typescript
const value: models.Three2 = {
  created: 2003.9,
  date: 1874.74,
  deploymentId: "<id>",
  id: "<id>",
  info: {
    type: "<value>",
    name: "<value>",
  },
  serial: "<value>",
  type: "middleware-invocation",
};
```

### `models.Three3`

```typescript
const value: models.Three3 = {
  type: "alias-assigned",
  deploymentId: "<id>",
  date: 6251.14,
  alias: [],
  aliasError: {
    code: "<value>",
    message: "<value>",
  },
  aliasWarning: {
    code: "<value>",
    message: "<value>",
  },
};
```

