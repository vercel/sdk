# GetDeploymentResponseBodyManualProvisioning

Present when deployment was created with VERCEL_MANUAL_PROVISIONING=true. The deployment stays in INITIALIZING until /continue is called.

## Example Usage

```typescript
import { GetDeploymentResponseBodyManualProvisioning } from "@vercel/sdk/models/getdeploymentop.js";

let value: GetDeploymentResponseBodyManualProvisioning = {
  state: "COMPLETE",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `state`                                                                              | [models.GetDeploymentResponseBodyState](../models/getdeploymentresponsebodystate.md) | :heavy_check_mark:                                                                   | Current provisioning state                                                           |
| `completedAt`                                                                        | *number*                                                                             | :heavy_minus_sign:                                                                   | Timestamp when manual provisioning completed                                         |