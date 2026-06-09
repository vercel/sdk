# CancelDeploymentManualProvisioning

Present when deployment was created with manual provisioning enabled, either explicitly or via the experimental BYOC git flow. The deployment stays in INITIALIZING until /continue is called.

## Example Usage

```typescript
import { CancelDeploymentManualProvisioning } from "@vercel/sdk/models/canceldeploymentop.js";

let value: CancelDeploymentManualProvisioning = {
  state: "COMPLETE",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `state`                                                            | [models.CancelDeploymentState](../models/canceldeploymentstate.md) | :heavy_check_mark:                                                 | Current provisioning state                                         |
| `completedAt`                                                      | *number*                                                           | :heavy_minus_sign:                                                 | Timestamp when manual provisioning completed                       |