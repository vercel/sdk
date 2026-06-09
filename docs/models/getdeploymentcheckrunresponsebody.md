# GetDeploymentCheckRunResponseBody


## Supported Types

### `models.GetDeploymentCheckRunResponseBody1`

```typescript
const value: models.GetDeploymentCheckRunResponseBody1 = {
  id: "<id>",
  name: "<value>",
  ownerId: "<id>",
  deploymentId: "<id>",
  status: "running",
  timeout: 2839.55,
  createdAt: 4278.28,
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
  id: "<id>",
  name: "<value>",
  ownerId: "<id>",
  deploymentId: "<id>",
  status: "completed",
  timeout: 6824.27,
  createdAt: 4581.01,
  updatedAt: 5097.21,
  source: {
    subKind: "vercel-ci",
    origin: "config",
    invocationId: "<id>",
    jobDefinitionId: "<id>",
  },
};
```

