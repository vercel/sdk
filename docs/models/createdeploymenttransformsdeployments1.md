# CreateDeploymentTransformsDeployments1

## Example Usage

```typescript
import { CreateDeploymentTransformsDeployments1 } from "@vercel/sdk/models/createdeploymentrouteslocale.js";

let value: CreateDeploymentTransformsDeployments1 = {
  type: "request.query",
  op: "delete",
  target: {
    key: "<key>",
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                     | [models.CreateDeploymentTransformsDeploymentsResponseType](../models/createdeploymenttransformsdeploymentsresponsetype.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `op`                                                                                                                       | [models.CreateDeploymentTransformsDeploymentsResponseOp](../models/createdeploymenttransformsdeploymentsresponseop.md)     | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `target`                                                                                                                   | [models.CreateDeploymentTransformsDeploymentsTarget](../models/createdeploymenttransformsdeploymentstarget.md)             | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `args`                                                                                                                     | *models.CreateDeploymentTransformsDeploymentsArgs*                                                                         | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `env`                                                                                                                      | *string*[]                                                                                                                 | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |