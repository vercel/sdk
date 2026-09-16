# Integrations

## Example Usage

```typescript
import { Integrations } from "@vercel/sdk/models/canceldeploymentresourceconfig.js";

let value: Integrations = {
  startedAt: 8817.6,
  status: "pending",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `claimedAt`                                                                                | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `completedAt`                                                                              | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `skippedAt`                                                                                | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `skippedBy`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `startedAt`                                                                                | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `status`                                                                                   | [models.CancelDeploymentDeploymentsStatus](../models/canceldeploymentdeploymentsstatus.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |