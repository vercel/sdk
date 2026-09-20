# CreateDeploymentTransforms1

## Example Usage

```typescript
import { CreateDeploymentTransforms1 } from "@vercel/sdk/models/createdeploymentvaluedeploymentsresponse200applicationjsonresponsebody2services2redirectsmissing2.js";

let value: CreateDeploymentTransforms1 = {
  op: "delete",
  target: {
    key: {},
  },
  type: "request.headers",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `args`                                                                                   | *models.CreateDeploymentTransformsArgs*                                                  | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `env`                                                                                    | *string*[]                                                                               | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `op`                                                                                     | [models.CreateDeploymentTransformsOp](../models/createdeploymenttransformsop.md)         | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `target`                                                                                 | [models.CreateDeploymentTransformsTarget](../models/createdeploymenttransformstarget.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `type`                                                                                   | [models.CreateDeploymentTransformsType](../models/createdeploymenttransformstype.md)     | :heavy_check_mark:                                                                       | N/A                                                                                      |