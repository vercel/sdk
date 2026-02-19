# CreateDeploymentCheckRunSource


## Supported Types

### `models.CreateDeploymentCheckRunSource1`

```typescript
const value: models.CreateDeploymentCheckRunSource1 = {
  kind: "integration",
  integrationId: "<id>",
  integrationConfigurationId: "<id>",
};
```

### `models.CreateDeploymentCheckRunSource2`

```typescript
const value: models.CreateDeploymentCheckRunSource2 = {
  kind: "webhook",
};
```

### `models.CreateDeploymentCheckRunSource3`

```typescript
const value: models.CreateDeploymentCheckRunSource3 = {
  kind: "git-provider",
  provider: "gitlab",
  externalCheckName: "<value>",
};
```

