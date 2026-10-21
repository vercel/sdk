# GetDeploymentCheckRunResponseBodySource


## Supported Types

### `models.GetDeploymentCheckRunSource1`

```typescript
const value: models.GetDeploymentCheckRunSource1 = {
  integrationConfigurationId: "<id>",
  integrationId: "<id>",
  kind: "integration",
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
  externalCheckName: "<value>",
  kind: "git-provider",
  provider: "github",
};
```

### `models.GetDeploymentCheckRunSource4`

```typescript
const value: models.GetDeploymentCheckRunSource4 = {};
```

### `models.GetDeploymentCheckRunSource5`

```typescript
const value: models.GetDeploymentCheckRunSource5 = {
  origin: "api",
  selection: {
    kind: "invocation",
  },
  subKind: "vercel-ci-check",
};
```

