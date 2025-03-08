# CancelDeploymentIntegrations

## Example Usage

```typescript
import { CancelDeploymentIntegrations } from "@vercel/sdk/models/canceldeploymentop.js";

let value: CancelDeploymentIntegrations = {
  status: "ready",
  startedAt: 5265.84,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `status`                                                                                   | [models.CancelDeploymentDeploymentsStatus](../models/canceldeploymentdeploymentsstatus.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `startedAt`                                                                                | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `completedAt`                                                                              | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `skippedAt`                                                                                | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `skippedBy`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |