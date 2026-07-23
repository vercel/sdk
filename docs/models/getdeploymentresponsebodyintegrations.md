# GetDeploymentResponseBodyIntegrations

## Example Usage

```typescript
import { GetDeploymentResponseBodyIntegrations } from "@vercel/sdk/models/getdeploymentresponsebodymanualprovisioning.js";

let value: GetDeploymentResponseBodyIntegrations = {
  status: "pending",
  startedAt: 552.84,
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                     | [models.GetDeploymentResponseBodyDeploymentsResponseStatus](../models/getdeploymentresponsebodydeploymentsresponsestatus.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `startedAt`                                                                                                                  | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `claimedAt`                                                                                                                  | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `completedAt`                                                                                                                | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `skippedAt`                                                                                                                  | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `skippedBy`                                                                                                                  | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |