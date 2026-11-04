# CreateKmsIssuerPolicy


## Supported Types

### `models.Policy1`

```typescript
const value: models.Policy1 = {
  kind: "project-grant",
  teamId: "<id>",
  projectId: "<id>",
  environments: [],
};
```

### `models.Policy2`

```typescript
const value: models.Policy2 = {
  kind: "connex-grant",
  clientId: "<id>",
};
```

### `models.Policy3`

```typescript
const value: models.Policy3 = {
  kind: "integration-tokens-grant",
  integrationId: "<id>",
};
```

