# GetDeploymentTransforms1

## Example Usage

```typescript
import { GetDeploymentTransforms1 } from "@vercel/sdk/models/getdeploymentservicesdeploymentsmiddlewarematcher.js";

let value: GetDeploymentTransforms1 = {
  op: "append",
  target: {
    key: "<key>",
  },
  type: "response.headers",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `args`                                                                                               | *models.GetDeploymentTransformsArgs*                                                                 | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `env`                                                                                                | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `op`                                                                                                 | [models.GetDeploymentTransformsOp](../models/getdeploymenttransformsop.md)                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `target`                                                                                             | [models.GetDeploymentTransformsTarget](../models/getdeploymenttransformstarget.md)                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `type`                                                                                               | [models.GetDeploymentTransformsDeploymentsType](../models/getdeploymenttransformsdeploymentstype.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |