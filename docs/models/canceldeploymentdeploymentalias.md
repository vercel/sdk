# CancelDeploymentDeploymentAlias

Condensed check data. Retrieve individual check and check run data using api-checks v2 routes.

## Example Usage

```typescript
import { CancelDeploymentDeploymentAlias } from "@vercel/sdk/models/canceldeploymentop.js";

let value: CancelDeploymentDeploymentAlias = {
  state: "succeeded",
  startedAt: 9990.81,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `state`                                                            | [models.CancelDeploymentState](../models/canceldeploymentstate.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `startedAt`                                                        | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `completedAt`                                                      | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |