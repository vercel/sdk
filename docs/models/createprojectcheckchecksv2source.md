# CreateProjectCheckChecksV2Source


## Supported Types

### `models.CreateProjectCheckSource1`

```typescript
const value: models.CreateProjectCheckSource1 = {
  kind: "integration",
  integrationId: "<id>",
  integrationConfigurationId: "<id>",
};
```

### `models.CreateProjectCheckSource2`

```typescript
const value: models.CreateProjectCheckSource2 = {
  kind: "webhook",
};
```

### `models.CreateProjectCheckSource3`

```typescript
const value: models.CreateProjectCheckSource3 = {
  kind: "git-provider",
  provider: "github",
  externalCheckName: "<value>",
};
```

