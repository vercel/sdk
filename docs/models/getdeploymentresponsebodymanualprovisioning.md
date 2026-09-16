# GetDeploymentResponseBodyManualProvisioning

Present when deployment was created with manual provisioning enabled, either explicitly or via the experimental BYOC git flow. The deployment stays in INITIALIZING until /continue is called.

## Example Usage

```typescript
import { GetDeploymentResponseBodyManualProvisioning } from "@vercel/sdk/models/getdeploymentservicesfunctions.js";

let value: GetDeploymentResponseBodyManualProvisioning = {
  state: "PENDING",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `completedAt`                                                                        | *number*                                                                             | :heavy_minus_sign:                                                                   | Timestamp when manual provisioning completed                                         |
| `state`                                                                              | [models.GetDeploymentResponseBodyState](../models/getdeploymentresponsebodystate.md) | :heavy_check_mark:                                                                   | Current provisioning state                                                           |