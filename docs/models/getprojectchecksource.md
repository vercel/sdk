# GetProjectCheckSource


## Supported Types

### `models.GetProjectCheckSource1`

```typescript
const value: models.GetProjectCheckSource1 = {
  kind: "integration",
  integrationId: "<id>",
  integrationConfigurationId: "<id>",
};
```

### `models.GetProjectCheckSource2`

```typescript
const value: models.GetProjectCheckSource2 = {
  kind: "webhook",
};
```

### `models.GetProjectCheckSource3`

```typescript
const value: models.GetProjectCheckSource3 = {
  kind: "git-provider",
  provider: "github",
  externalCheckName: "<value>",
};
```

