# GetDeploymentTransformsDeployments1

## Example Usage

```typescript
import { GetDeploymentTransformsDeployments1 } from "@vercel/sdk/models/getdeploymentservicestrigger.js";

let value: GetDeploymentTransformsDeployments1 = {
  op: "append",
  target: {
    key: "<key>",
  },
  type: "request.headers",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `args`                                                                                                                     | *models.GetDeploymentTransformsDeploymentsArgs*                                                                            | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `env`                                                                                                                      | *string*[]                                                                                                                 | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `op`                                                                                                                       | [models.GetDeploymentTransformsDeploymentsResponseOp](../models/getdeploymenttransformsdeploymentsresponseop.md)           | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `target`                                                                                                                   | [models.GetDeploymentTransformsDeploymentsTarget](../models/getdeploymenttransformsdeploymentstarget.md)                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `type`                                                                                                                     | [models.GetDeploymentTransformsDeploymentsResponse200Type](../models/getdeploymenttransformsdeploymentsresponse200type.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |