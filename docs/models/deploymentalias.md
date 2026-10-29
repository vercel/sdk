# DeploymentAlias

## Example Usage

```typescript
import { DeploymentAlias } from "@vercel/sdk/models/canceldeploymentprojectsettings.js";

let value: DeploymentAlias = {
  startedAt: 3512.67,
  state: "failed",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `completedAt`                                                                            | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `startedAt`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `state`                                                                                  | [models.CancelDeploymentDeploymentsState](../models/canceldeploymentdeploymentsstate.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |