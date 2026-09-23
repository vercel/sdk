# UpdateDeploymentCheckRunResponseBodySource


## Supported Types

### `models.UpdateDeploymentCheckRunSource1`

```typescript
const value: models.UpdateDeploymentCheckRunSource1 = {
  integrationConfigurationId: "<id>",
  integrationId: "<id>",
  kind: "integration",
};
```

### `models.UpdateDeploymentCheckRunSource2`

```typescript
const value: models.UpdateDeploymentCheckRunSource2 = {
  kind: "webhook",
};
```

### `models.UpdateDeploymentCheckRunSource3`

```typescript
const value: models.UpdateDeploymentCheckRunSource3 = {
  externalCheckName: "<value>",
  kind: "git-provider",
  provider: "bitbucket",
};
```

### `models.UpdateDeploymentCheckRunSource4`

```typescript
const value: models.UpdateDeploymentCheckRunSource4 = {};
```

### `models.UpdateDeploymentCheckRunSource5`

```typescript
const value: models.UpdateDeploymentCheckRunSource5 = {
  origin: "api",
  selection: {
    job: "Central Group Architect",
    kind: "task",
    task: "<value>",
  },
  subKind: "vercel-ci-check",
};
```

