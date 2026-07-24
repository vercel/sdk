# Integrations

## Example Usage

```typescript
import { Integrations } from "@vercel/sdk/models/canceldeploymentservicesdeploymentsfunctions.js";

let value: Integrations = {
  status: "timeout",
  startedAt: 2472.7,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `status`                                                                                   | [models.CancelDeploymentDeploymentsStatus](../models/canceldeploymentdeploymentsstatus.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `startedAt`                                                                                | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `claimedAt`                                                                                | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `completedAt`                                                                              | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `skippedAt`                                                                                | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `skippedBy`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |