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

### `models.Source4`

```typescript
const value: models.Source4 = {};
```

### `models.Source5`

```typescript
const value: models.Source5 = {
  origin: "api",
  selection: {
    job: "Principal Data Planner",
    kind: "job",
  },
  subKind: "vercel-ci-check",
};
```

