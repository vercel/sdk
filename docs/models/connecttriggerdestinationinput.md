# ConnectTriggerDestinationInput

A destination in the complete replacement set. Each destination targets the default deployment, a branch, or a custom environment.


## Supported Types

### `models.DefaultDeployment`

```typescript
const value: models.DefaultDeployment = {
  projectId: "<id>",
};
```

### `models.Branch`

```typescript
const value: models.Branch = {
  projectId: "<id>",
  branch: "<value>",
};
```

### `models.CustomEnvironment`

```typescript
const value: models.CustomEnvironment = {
  projectId: "<id>",
  customEnvironmentId: "<id>",
};
```

