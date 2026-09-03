# TriggerDestination

Initial trigger destination. Requires triggers to be enabled and a projectId here or at the top level. Connector responses expose the resulting set as triggerDestinations. Replace the complete set with PATCH /v1/connect/connectors/{connector}/trigger-destinations.


## Supported Types

### `models.ConnectCreateConnectorRequestTriggerDestinationDefaultDeployment`

```typescript
const value:
  models.ConnectCreateConnectorRequestTriggerDestinationDefaultDeployment = {};
```

### `models.ConnectCreateConnectorRequestTriggerDestinationBranch`

```typescript
const value: models.ConnectCreateConnectorRequestTriggerDestinationBranch = {
  branch: "<value>",
};
```

### `models.ConnectCreateConnectorRequestTriggerDestinationCustomEnvironment`

```typescript
const value:
  models.ConnectCreateConnectorRequestTriggerDestinationCustomEnvironment = {
    customEnvironmentId: "<id>",
  };
```

