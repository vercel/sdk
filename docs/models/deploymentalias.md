# DeploymentAlias

Condensed check data. Retrieve individual check and check run data using api-checks v2 routes.

## Example Usage

```typescript
import { DeploymentAlias } from "@vercel/sdk/models/canceldeploymentresponsebody.js";

let value: DeploymentAlias = {
  state: "pending",
  startedAt: 1385.88,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `state`                                                                                  | [models.CancelDeploymentDeploymentsState](../models/canceldeploymentdeploymentsstate.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `startedAt`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `completedAt`                                                                            | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |