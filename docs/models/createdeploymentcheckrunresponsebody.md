# CreateDeploymentCheckRunResponseBody


## Supported Types

### `models.CreateDeploymentCheckRunResponseBody1`

```typescript
const value: models.CreateDeploymentCheckRunResponseBody1 = {
  id: "<id>",
  name: "<value>",
  ownerId: "<id>",
  deploymentId: "<id>",
  status: "running",
  timeout: 4515.7,
  createdAt: 9207,
  updatedAt: 412.51,
  checkId: "<id>",
  source: {
    kind: "integration",
    integrationId: "<id>",
    integrationConfigurationId: "<id>",
  },
};
```

### `models.CreateDeploymentCheckRunResponseBody2`

```typescript
const value: models.CreateDeploymentCheckRunResponseBody2 = {
  id: "<id>",
  name: "<value>",
  ownerId: "<id>",
  deploymentId: "<id>",
  status: "completed",
  timeout: 4968.62,
  createdAt: 3657.11,
  updatedAt: 1425.77,
  source: {
    subKind: "vercel-ci-sentinel",
    origin: "platform",
  },
};
```

