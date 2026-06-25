# GetDeploymentTransforms1

## Example Usage

```typescript
import { GetDeploymentTransforms1 } from "@vercel/sdk/models/getdeploymentmissingdeploymentsresponse1.js";

let value: GetDeploymentTransforms1 = {
  type: "request.headers",
  op: "append",
  target: {
    key: {},
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | [models.GetDeploymentTransformsDeploymentsType](../models/getdeploymenttransformsdeploymentstype.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `op`                                                                                                 | [models.GetDeploymentTransformsOp](../models/getdeploymenttransformsop.md)                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `target`                                                                                             | [models.GetDeploymentTransformsTarget](../models/getdeploymenttransformstarget.md)                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `args`                                                                                               | *models.GetDeploymentTransformsArgs*                                                                 | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `env`                                                                                                | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |