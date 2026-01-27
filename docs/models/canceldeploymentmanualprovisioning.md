# CancelDeploymentManualProvisioning

Present when deployment was created with VERCEL_MANUAL_PROVISIONING=true. The deployment stays in INITIALIZING until /continue is called.

## Example Usage

```typescript
import { CancelDeploymentManualProvisioning } from "@vercel/sdk/models/canceldeploymentop.js";

let value: CancelDeploymentManualProvisioning = {
  state: "PENDING",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `state`                                                            | [models.CancelDeploymentState](../models/canceldeploymentstate.md) | :heavy_check_mark:                                                 | Current provisioning state                                         |
| `completedAt`                                                      | *number*                                                           | :heavy_minus_sign:                                                 | Timestamp when manual provisioning completed                       |