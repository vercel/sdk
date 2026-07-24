# GetDeploymentEventsResponseBodyDeployments3


## Supported Types

### `models.GetDeploymentEvents31`

```typescript
const value: models.GetDeploymentEvents31 = {
  type: "command",
  created: 2469.14,
  payload: {
    deploymentId: "<id>",
    id: "<id>",
    date: 4386.4,
    serial: "<value>",
  },
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
    type: "<value>",
    name: "<value>",
  },
  serial: "<value>",
  type: "fatal",
};
```

### `models.GetDeploymentEvents33`

```typescript
const value: models.GetDeploymentEvents33 = {
  type: "alias-assigned",
  deploymentId: "<id>",
  date: 2381.48,
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

