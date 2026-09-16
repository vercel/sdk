# GetDeploymentCheckRunResponseBody


## Supported Types

### `models.GetDeploymentCheckRunResponseBody1`

```typescript
const value: models.GetDeploymentCheckRunResponseBody1 = {
  createdAt: 9174.98,
  deploymentId: "<id>",
  id: "<id>",
  name: "<value>",
  ownerId: "<id>",
  status: "completed",
  timeout: 4278.28,
  updatedAt: 4806.55,
  checkId: "<id>",
  source: {
    kind: "webhook",
  },
};
```

### `models.GetDeploymentCheckRunResponseBody2`

```typescript
const value: models.GetDeploymentCheckRunResponseBody2 = {
  createdAt: 1336.67,
  deploymentId: "<id>",
  id: "<id>",
  name: "<value>",
  ownerId: "<id>",
  status: "running",
  timeout: 4581.01,
  updatedAt: 5097.21,
  source: {
    invocationId: "<id>",
    jobDefinitionId: "<id>",
    origin: "config",
    subKind: "vercel-ci",
  },
};
```

