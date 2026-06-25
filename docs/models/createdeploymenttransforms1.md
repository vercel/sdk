# CreateDeploymentTransforms1

## Example Usage

```typescript
import { CreateDeploymentTransforms1 } from "@vercel/sdk/models/createdeploymentrouteslocale.js";

let value: CreateDeploymentTransforms1 = {
  type: "request.query",
  op: "set",
  target: {
    key: "<key>",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [models.CreateDeploymentTransformsDeploymentsType](../models/createdeploymenttransformsdeploymentstype.md)             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `op`                                                                                                                   | [models.CreateDeploymentTransformsDeploymentsResponseOp](../models/createdeploymenttransformsdeploymentsresponseop.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `target`                                                                                                               | [models.CreateDeploymentTransformsTarget](../models/createdeploymenttransformstarget.md)                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `args`                                                                                                                 | *models.CreateDeploymentTransformsArgs*                                                                                | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `env`                                                                                                                  | *string*[]                                                                                                             | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |