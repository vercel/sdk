# UpdateProjectCheckSource


## Supported Types

### `models.UpdateProjectCheckSource1`

```typescript
const value: models.UpdateProjectCheckSource1 = {
  kind: "integration",
  integrationId: "<id>",
  integrationConfigurationId: "<id>",
};
```

### `models.UpdateProjectCheckSource2`

```typescript
const value: models.UpdateProjectCheckSource2 = {
  kind: "webhook",
};
```

### `models.UpdateProjectCheckSource3`

```typescript
const value: models.UpdateProjectCheckSource3 = {
  kind: "git-provider",
  provider: "gitlab",
  externalCheckName: "<value>",
};
```

