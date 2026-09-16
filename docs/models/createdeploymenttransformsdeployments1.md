# CreateDeploymentTransformsDeployments1

## Example Usage

```typescript
import { CreateDeploymentTransformsDeployments1 } from "@vercel/sdk/models/createdeploymentresponsebody.js";

let value: CreateDeploymentTransformsDeployments1 = {
  op: "delete",
  target: {
    key: {},
  },
  type: "request.headers",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `args`                                                                                                                     | *models.CreateDeploymentTransformsDeploymentsArgs*                                                                         | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `env`                                                                                                                      | *string*[]                                                                                                                 | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `op`                                                                                                                       | [models.CreateDeploymentTransformsDeploymentsResponseOp](../models/createdeploymenttransformsdeploymentsresponseop.md)     | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `target`                                                                                                                   | [models.CreateDeploymentTransformsDeploymentsTarget](../models/createdeploymenttransformsdeploymentstarget.md)             | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `type`                                                                                                                     | [models.CreateDeploymentTransformsDeploymentsResponseType](../models/createdeploymenttransformsdeploymentsresponsetype.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |