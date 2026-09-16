# ListDeploymentCheckRunsRuns


## Supported Types

### `models.ListDeploymentCheckRunsRuns1`

```typescript
const value: models.ListDeploymentCheckRunsRuns1 = {
  createdAt: 1369.39,
  deploymentId: "<id>",
  id: "<id>",
  name: "<value>",
  ownerId: "<id>",
  status: "completed",
  timeout: 3693.18,
  updatedAt: 9022.83,
  checkId: "<id>",
  source: {
    externalCheckName: "<value>",
    kind: "git-provider",
    provider: "github",
  },
};
```

### `models.ListDeploymentCheckRunsRuns2`

```typescript
const value: models.ListDeploymentCheckRunsRuns2 = {
  createdAt: 4810.6,
  deploymentId: "<id>",
  id: "<id>",
  name: "<value>",
  ownerId: "<id>",
  status: "running",
  timeout: 3580.63,
  updatedAt: 8998.16,
  source: {
    origin: "platform",
    subKind: "vercel-ci-sentinel",
  },
};
```

