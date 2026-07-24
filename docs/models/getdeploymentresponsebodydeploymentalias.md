# GetDeploymentResponseBodyDeploymentAlias

Condensed check data. Retrieve individual check and check run data using api-checks v2 routes.

## Example Usage

```typescript
import { GetDeploymentResponseBodyDeploymentAlias } from "@vercel/sdk/models/getdeploymentresponsebody.js";

let value: GetDeploymentResponseBodyDeploymentAlias = {
  state: "failed",
  startedAt: 72.98,
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `state`                                                                                                                    | [models.GetDeploymentResponseBodyDeploymentsResponseState](../models/getdeploymentresponsebodydeploymentsresponsestate.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `startedAt`                                                                                                                | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `completedAt`                                                                                                              | *number*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |