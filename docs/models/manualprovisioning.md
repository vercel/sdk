# ManualProvisioning

Present when deployment was created with manual provisioning enabled, either explicitly or via the experimental BYOC git flow. The deployment stays in INITIALIZING until /continue is called.

## Example Usage

```typescript
import { ManualProvisioning } from "@vercel/sdk/models/createdeploymentvaluedeployments2.js";

let value: ManualProvisioning = {
  state: "TIMEOUT",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `state`                                                            | [models.CreateDeploymentState](../models/createdeploymentstate.md) | :heavy_check_mark:                                                 | Current provisioning state                                         |
| `completedAt`                                                      | *number*                                                           | :heavy_minus_sign:                                                 | Timestamp when manual provisioning completed                       |