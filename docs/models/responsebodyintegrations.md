# ResponseBodyIntegrations

## Example Usage

```typescript
import { ResponseBodyIntegrations } from "@vercel/sdk/models/createdeploymentvaluedeploymentsresponse2.js";

let value: ResponseBodyIntegrations = {
  status: "skipped",
  startedAt: 1770.55,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `status`                                                                                                           | [models.CreateDeploymentResponseBodyDeploymentsStatus](../models/createdeploymentresponsebodydeploymentsstatus.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `startedAt`                                                                                                        | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `claimedAt`                                                                                                        | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `completedAt`                                                                                                      | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `skippedAt`                                                                                                        | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `skippedBy`                                                                                                        | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |