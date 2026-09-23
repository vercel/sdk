# RunsSource


## Supported Types

### `models.ListCheckRunsSource1`

```typescript
const value: models.ListCheckRunsSource1 = {
  integrationConfigurationId: "<id>",
  integrationId: "<id>",
  kind: "integration",
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
  externalCheckName: "<value>",
  kind: "git-provider",
  provider: "bitbucket",
};
```

### `models.ListCheckRunsSource4`

```typescript
const value: models.ListCheckRunsSource4 = {};
```

### `models.ListCheckRunsSource5`

```typescript
const value: models.ListCheckRunsSource5 = {
  origin: "api",
  selection: {
    kind: "invocation",
  },
  subKind: "vercel-ci-check",
};
```

