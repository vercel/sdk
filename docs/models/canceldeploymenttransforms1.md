# CancelDeploymentTransforms1

## Example Usage

```typescript
import { CancelDeploymentTransforms1 } from "@vercel/sdk/models/canceldeploymentresponsebody.js";

let value: CancelDeploymentTransforms1 = {
  op: "append",
  target: {
    key: "<key>",
  },
  type: "request.headers",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `args`                                                                                                                 | *models.CancelDeploymentTransformsArgs*                                                                                | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `env`                                                                                                                  | *string*[]                                                                                                             | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `op`                                                                                                                   | [models.CancelDeploymentTransformsDeploymentsResponseOp](../models/canceldeploymenttransformsdeploymentsresponseop.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `target`                                                                                                               | [models.CancelDeploymentTransformsTarget](../models/canceldeploymenttransformstarget.md)                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `type`                                                                                                                 | [models.CancelDeploymentTransformsDeploymentsType](../models/canceldeploymenttransformsdeploymentstype.md)             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |