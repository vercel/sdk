# GetDeploymentsDeploymentAlias

Detailed information about v2 deployment checks. Includes information about blocked workflows in the deployment lifecycle.

## Example Usage

```typescript
import { GetDeploymentsDeploymentAlias } from "@vercel/sdk/models/getdeploymentsop.js";

let value: GetDeploymentsDeploymentAlias = {
  startedAt: 2255.53,
  state: "failed",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `completedAt`                                                                                        | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `startedAt`                                                                                          | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `state`                                                                                              | [models.GetDeploymentsDeploymentsResponseState](../models/getdeploymentsdeploymentsresponsestate.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |