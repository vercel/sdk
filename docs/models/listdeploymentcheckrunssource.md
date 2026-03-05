# ListDeploymentCheckRunsSource


## Supported Types

### `models.ListDeploymentCheckRunsSource1`

```typescript
const value: models.ListDeploymentCheckRunsSource1 = {
  kind: "integration",
  integrationId: "<id>",
  integrationConfigurationId: "<id>",
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
  kind: "git-provider",
  provider: "gitlab",
  externalCheckName: "<value>",
};
```

