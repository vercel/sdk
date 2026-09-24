# CreateDeploymentResponseBodyManualProvisioning

Present when deployment was created with manual provisioning enabled, either explicitly or via the experimental BYOC git flow. The deployment stays in INITIALIZING until /continue is called.

## Example Usage

```typescript
import { CreateDeploymentResponseBodyManualProvisioning } from "@vercel/sdk/models/createdeploymentmissingdeploymentsresponse200applicationjsonresponsebodytype.js";

let value: CreateDeploymentResponseBodyManualProvisioning = {
  state: "TIMEOUT",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `completedAt`                                                                              | *number*                                                                                   | :heavy_minus_sign:                                                                         | Timestamp when manual provisioning completed                                               |
| `state`                                                                                    | [models.CreateDeploymentResponseBodyState](../models/createdeploymentresponsebodystate.md) | :heavy_check_mark:                                                                         | Current provisioning state                                                                 |