# UpdateDeploymentCheckRunSource


## Supported Types

### `models.UpdateDeploymentCheckRunSource1`

```typescript
const value: models.UpdateDeploymentCheckRunSource1 = {
  kind: "integration",
  integrationId: "<id>",
  integrationConfigurationId: "<id>",
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
  kind: "git-provider",
  provider: "github",
  externalCheckName: "<value>",
};
```

