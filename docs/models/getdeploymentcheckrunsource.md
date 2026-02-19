# GetDeploymentCheckRunSource


## Supported Types

### `models.GetDeploymentCheckRunSource1`

```typescript
const value: models.GetDeploymentCheckRunSource1 = {
  kind: "integration",
  integrationId: "<id>",
  integrationConfigurationId: "<id>",
};
```

### `models.GetDeploymentCheckRunSource2`

```typescript
const value: models.GetDeploymentCheckRunSource2 = {
  kind: "webhook",
};
```

### `models.GetDeploymentCheckRunSource3`

```typescript
const value: models.GetDeploymentCheckRunSource3 = {
  kind: "git-provider",
  provider: "gitlab",
  externalCheckName: "<value>",
};
```

