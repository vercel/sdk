# ConnectCreateConnectorRequestTriggerDestination

Initial trigger destination. Requires triggers to be enabled and a projectId here or at the top level. Connector responses expose the resulting set as triggerDestinations. Replace the complete set with PATCH /v1/connect/connectors/{connector}/trigger-destinations.


## Supported Types

### `models.TriggerDestinationDefaultDeployment`

```typescript
const value: models.TriggerDestinationDefaultDeployment = {};
```

### `models.TriggerDestinationBranch`

```typescript
const value: models.TriggerDestinationBranch = {
  branch: "<value>",
};
```

### `models.TriggerDestinationCustomEnvironment`

```typescript
const value: models.TriggerDestinationCustomEnvironment = {
  customEnvironmentId: "<id>",
};
```

