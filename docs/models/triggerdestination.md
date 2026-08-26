# TriggerDestination

Initial trigger destination. Requires triggers to be enabled and a projectId here or at the top level. Connector responses expose the resulting set as triggerDestinations. Replace the complete set with PATCH /v1/connect/connectors/{connector}/trigger-destinations.


## Supported Types

### `models.DefaultDeployment`

```typescript
const value: models.DefaultDeployment = {};
```

### `models.Branch`

```typescript
const value: models.Branch = {
  branch: "<value>",
};
```

### `models.CustomEnvironment`

```typescript
const value: models.CustomEnvironment = {
  customEnvironmentId: "<id>",
};
```

