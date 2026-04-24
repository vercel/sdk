# GetDeploymentResponseBodyManualProvisioning

Present when deployment was created with manual provisioning enabled, either explicitly or via the experimental BYOC git flow. The deployment stays in INITIALIZING until /continue is called.

## Example Usage

```typescript
import { GetDeploymentResponseBodyManualProvisioning } from "@vercel/sdk/models/responsebodyproject.js";

let value: GetDeploymentResponseBodyManualProvisioning = {
  state: "COMPLETE",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `state`                                                                              | [models.GetDeploymentResponseBodyState](../models/getdeploymentresponsebodystate.md) | :heavy_check_mark:                                                                   | Current provisioning state                                                           |
| `completedAt`                                                                        | *number*                                                                             | :heavy_minus_sign:                                                                   | Timestamp when manual provisioning completed                                         |