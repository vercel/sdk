# ResponseBodyDeploymentAlias

Condensed check data. Retrieve individual check and check run data using api-checks v2 routes.

## Example Usage

```typescript
import { ResponseBodyDeploymentAlias } from "@vercel/sdk/models/getdeploymentresponsebody.js";

let value: ResponseBodyDeploymentAlias = {
  state: "failed",
  startedAt: 3522.6,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `state`                                                                                                    | [models.GetDeploymentResponseBodyDeploymentsState](../models/getdeploymentresponsebodydeploymentsstate.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `startedAt`                                                                                                | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `completedAt`                                                                                              | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |