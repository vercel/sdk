# ListProjectChecksSource


## Supported Types

### `models.ListProjectChecksSource1`

```typescript
const value: models.ListProjectChecksSource1 = {
  kind: "integration",
  integrationId: "<id>",
  integrationConfigurationId: "<id>",
};
```

### `models.ListProjectChecksSource2`

```typescript
const value: models.ListProjectChecksSource2 = {
  kind: "webhook",
};
```

### `models.ListProjectChecksSource3`

```typescript
const value: models.ListProjectChecksSource3 = {
  kind: "git-provider",
  provider: "bitbucket",
  externalCheckName: "<value>",
};
```

