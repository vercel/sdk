# ListDeploymentCheckRunsRuns


## Supported Types

### `models.ListDeploymentCheckRunsRuns1`

```typescript
const value: models.ListDeploymentCheckRunsRuns1 = {
  id: "<id>",
  name: "<value>",
  ownerId: "<id>",
  deploymentId: "<id>",
  status: "queued",
  timeout: 1658.76,
  createdAt: 3693.18,
  updatedAt: 9022.83,
  checkId: "<id>",
  source: {
    kind: "git-provider",
    provider: "gitlab",
    externalCheckName: "<value>",
  },
};
```

### `models.ListDeploymentCheckRunsRuns2`

```typescript
const value: models.ListDeploymentCheckRunsRuns2 = {
  id: "<id>",
  name: "<value>",
  ownerId: "<id>",
  deploymentId: "<id>",
  status: "running",
  timeout: 7765.81,
  createdAt: 3580.63,
  updatedAt: 8998.16,
  source: {
    subKind: "vercel-ci-sentinel",
    origin: "platform",
  },
};
```

