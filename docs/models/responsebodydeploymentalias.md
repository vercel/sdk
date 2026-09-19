# ResponseBodyDeploymentAlias

Condensed check data. Retrieve individual check and check run data using api-checks v2 routes.

## Example Usage

```typescript
import { ResponseBodyDeploymentAlias } from "@vercel/sdk/models/responsebodyremotepatterns.js";

let value: ResponseBodyDeploymentAlias = {
  startedAt: 6434.02,
  state: "pending",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `completedAt`                                                                                                    | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `startedAt`                                                                                                      | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `state`                                                                                                          | [models.CreateDeploymentResponseBodyDeploymentsState](../models/createdeploymentresponsebodydeploymentsstate.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |