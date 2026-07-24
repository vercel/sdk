# CreateDeploymentResponseBodyManualProvisioning

Present when deployment was created with manual provisioning enabled, either explicitly or via the experimental BYOC git flow. The deployment stays in INITIALIZING until /continue is called.

## Example Usage

```typescript
import { CreateDeploymentResponseBodyManualProvisioning } from "@vercel/sdk/models/createdeploymentvaluedeploymentsresponse2.js";

let value: CreateDeploymentResponseBodyManualProvisioning = {
  state: "TIMEOUT",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `state`                                                                                    | [models.CreateDeploymentResponseBodyState](../models/createdeploymentresponsebodystate.md) | :heavy_check_mark:                                                                         | Current provisioning state                                                                 |
| `completedAt`                                                                              | *number*                                                                                   | :heavy_minus_sign:                                                                         | Timestamp when manual provisioning completed                                               |