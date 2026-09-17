# ListDeploymentCheckRunsRunsSource


## Supported Types

### `models.ListDeploymentCheckRunsSource1`

```typescript
const value: models.ListDeploymentCheckRunsSource1 = {
  integrationConfigurationId: "<id>",
  integrationId: "<id>",
  kind: "integration",
};
```

### `models.ListDeploymentCheckRunsSource2`

```typescript
const value: models.ListDeploymentCheckRunsSource2 = {
  kind: "webhook",
};
```

### `models.ListDeploymentCheckRunsSource3`

```typescript
const value: models.ListDeploymentCheckRunsSource3 = {
  externalCheckName: "<value>",
  kind: "git-provider",
  provider: "github",
};
```

### `models.ListDeploymentCheckRunsSource4`

```typescript
const value: models.ListDeploymentCheckRunsSource4 = {};
```

### `models.ListDeploymentCheckRunsSource5`

```typescript
const value: models.ListDeploymentCheckRunsSource5 = {
  origin: "api",
  selection: {
    job: "Regional Response Administrator",
    kind: "job",
  },
  subKind: "vercel-ci-check",
};
```

