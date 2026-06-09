# UpdateDeploymentCheckRunResponseBody


## Supported Types

### `models.UpdateDeploymentCheckRunResponseBody1`

```typescript
const value: models.UpdateDeploymentCheckRunResponseBody1 = {
  id: "<id>",
  name: "<value>",
  ownerId: "<id>",
  deploymentId: "<id>",
  status: "queued",
  timeout: 6527.32,
  createdAt: 2125,
  updatedAt: 4265.19,
  checkId: "<id>",
  source: {
    kind: "git-provider",
    provider: "bitbucket",
    externalCheckName: "<value>",
  },
};
```

### `models.UpdateDeploymentCheckRunResponseBody2`

```typescript
const value: models.UpdateDeploymentCheckRunResponseBody2 = {
  id: "<id>",
  name: "<value>",
  ownerId: "<id>",
  deploymentId: "<id>",
  status: "completed",
  timeout: 9135.25,
  createdAt: 2810.18,
  updatedAt: 967.97,
  source: {
    subKind: "vercel-ci-sentinel",
    origin: "platform",
  },
};
```

