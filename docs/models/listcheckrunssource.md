# ListCheckRunsSource


## Supported Types

### `models.ListCheckRunsSource1`

```typescript
const value: models.ListCheckRunsSource1 = {
  kind: "integration",
  integrationId: "<id>",
  integrationConfigurationId: "<id>",
};
```

### `models.ListCheckRunsSource2`

```typescript
const value: models.ListCheckRunsSource2 = {
  kind: "webhook",
};
```

### `models.ListCheckRunsSource3`

```typescript
const value: models.ListCheckRunsSource3 = {
  kind: "git-provider",
  provider: "github",
  externalCheckName: "<value>",
};
```

