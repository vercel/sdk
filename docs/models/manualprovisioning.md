# ManualProvisioning

Present when deployment was created with manual provisioning enabled, either explicitly or via the experimental BYOC git flow. The deployment stays in INITIALIZING until /continue is called.

## Example Usage

```typescript
import { ManualProvisioning } from "@vercel/sdk/models/readystate.js";

let value: ManualProvisioning = {
  state: "TIMEOUT",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `completedAt`                                                      | *number*                                                           | :heavy_minus_sign:                                                 | Timestamp when manual provisioning completed                       |
| `state`                                                            | [models.CancelDeploymentState](../models/canceldeploymentstate.md) | :heavy_check_mark:                                                 | Current provisioning state                                         |