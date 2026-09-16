# CreateProjectCheckChecksV2Source


## Supported Types

### `models.CreateProjectCheckSource1`

```typescript
const value: models.CreateProjectCheckSource1 = {
  integrationConfigurationId: "<id>",
  integrationId: "<id>",
  kind: "integration",
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
  externalCheckName: "<value>",
  kind: "git-provider",
  provider: "github",
};
```

