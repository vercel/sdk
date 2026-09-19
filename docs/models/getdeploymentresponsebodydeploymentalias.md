# GetDeploymentResponseBodyDeploymentAlias

Condensed check data. Retrieve individual check and check run data using api-checks v2 routes.

## Example Usage

```typescript
import { GetDeploymentResponseBodyDeploymentAlias } from "@vercel/sdk/models/getdeploymentgitsourcedeploymentsresponse200applicationjsonresponsebody216type.js";

let value: GetDeploymentResponseBodyDeploymentAlias = {
  startedAt: 119.46,
  state: "failed",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `completedAt`                                                                                                              | *number*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `startedAt`                                                                                                                | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `state`                                                                                                                    | [models.GetDeploymentResponseBodyDeploymentsResponseState](../models/getdeploymentresponsebodydeploymentsresponsestate.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |