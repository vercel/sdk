# CreateProjectCheckChecksV2Source


## Supported Types

### `models.CreateProjectCheckSourceChecksV21`

```typescript
const value: models.CreateProjectCheckSourceChecksV21 = {
  kind: "integration",
  integrationId: "<id>",
  integrationConfigurationId: "<id>",
};
```

### `models.CreateProjectCheckSourceChecksV22`

```typescript
const value: models.CreateProjectCheckSourceChecksV22 = {
  kind: "webhook",
};
```

### `models.CreateProjectCheckSource3`

```typescript
const value: models.CreateProjectCheckSource3 = {
  kind: "git-provider",
  provider: "gitlab",
  externalCheckName: "<value>",
};
```

