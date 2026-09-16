# GetDeploymentEventsResponseBody3


## Supported Types

### `models.Three1`

```typescript
const value: models.Three1 = {
  created: 1385.38,
  payload: {
    date: 4034.37,
    deploymentId: "<id>",
    id: "<id>",
    serial: "<value>",
  },
  type: "metric",
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
    name: "<value>",
    type: "<value>",
  },
  serial: "<value>",
  type: "middleware-invocation",
};
```

### `models.Three3`

```typescript
const value: models.Three3 = {
  date: 6251.14,
  deploymentId: "<id>",
  type: "alias-assigned",
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

