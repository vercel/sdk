# ResponseBodySource


## Supported Types

### `models.CreateDeploymentCheckRunSource1`

```typescript
const value: models.CreateDeploymentCheckRunSource1 = {
  integrationConfigurationId: "<id>",
  integrationId: "<id>",
  kind: "integration",
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
    filters: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    job: "Turborepo",
    kind: "turborepo",
    task: "<value>",
  },
  subKind: "vercel-ci-check",
};
```

