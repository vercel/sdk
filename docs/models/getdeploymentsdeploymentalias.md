# GetDeploymentsDeploymentAlias

Detailed information about v2 deployment checks. Includes information about blocked workflows in the deployment lifecycle.

## Example Usage

```typescript
import { GetDeploymentsDeploymentAlias } from "@vercel/sdk/models/getdeploymentsop.js";

let value: GetDeploymentsDeploymentAlias = {
  state: "succeeded",
  startedAt: 2871.01,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `state`                                                                              | [models.GetDeploymentsDeploymentsState](../models/getdeploymentsdeploymentsstate.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `startedAt`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `completedAt`                                                                        | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |