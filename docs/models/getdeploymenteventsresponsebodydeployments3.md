# GetDeploymentEventsResponseBodyDeployments3


## Supported Types

### `models.GetDeploymentEvents31`

```typescript
const value: models.GetDeploymentEvents31 = {
  created: 80.76,
  payload: {
    date: 2469.14,
    deploymentId: "<id>",
    id: "<id>",
    serial: "<value>",
  },
  type: "fatal",
};
```

### `models.GetDeploymentEvents32`

```typescript
const value: models.GetDeploymentEvents32 = {
  created: 245.68,
  date: 1606.59,
  deploymentId: "<id>",
  id: "<id>",
  info: {
    name: "<value>",
    type: "<value>",
  },
  serial: "<value>",
  type: "fatal",
};
```

### `models.GetDeploymentEvents33`

```typescript
const value: models.GetDeploymentEvents33 = {
  date: 2381.48,
  deploymentId: "<id>",
  type: "alias-assigned",
  alias: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
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

