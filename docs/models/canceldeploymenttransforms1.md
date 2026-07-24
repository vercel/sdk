# CancelDeploymentTransforms1

## Example Usage

```typescript
import { CancelDeploymentTransforms1 } from "@vercel/sdk/models/canceldeploymentgitrepoownertype.js";

let value: CancelDeploymentTransforms1 = {
  type: "request.headers",
  op: "append",
  target: {
    key: "<key>",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [models.CancelDeploymentTransformsDeploymentsType](../models/canceldeploymenttransformsdeploymentstype.md)             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `op`                                                                                                                   | [models.CancelDeploymentTransformsDeploymentsResponseOp](../models/canceldeploymenttransformsdeploymentsresponseop.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `target`                                                                                                               | [models.CancelDeploymentTransformsTarget](../models/canceldeploymenttransformstarget.md)                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `args`                                                                                                                 | *models.CancelDeploymentTransformsArgs*                                                                                | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `env`                                                                                                                  | *string*[]                                                                                                             | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |