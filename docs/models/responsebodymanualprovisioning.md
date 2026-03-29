# ResponseBodyManualProvisioning

Present when deployment was created with VERCEL_MANUAL_PROVISIONING=true. The deployment stays in INITIALIZING until /continue is called.

## Example Usage

```typescript
import { ResponseBodyManualProvisioning } from "@vercel/sdk/models/responsebodyproject.js";

let value: ResponseBodyManualProvisioning = {
  state: "PENDING",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `state`                                                                                                    | [models.GetDeploymentResponseBodyDeploymentsState](../models/getdeploymentresponsebodydeploymentsstate.md) | :heavy_check_mark:                                                                                         | Current provisioning state                                                                                 |
| `completedAt`                                                                                              | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | Timestamp when manual provisioning completed                                                               |