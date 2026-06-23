# CreateDeploymentRoutesDeploymentsTransforms

## Example Usage

```typescript
import { CreateDeploymentRoutesDeploymentsTransforms } from "@vercel/sdk/models/includefiles.js";

let value: CreateDeploymentRoutesDeploymentsTransforms = {
  type: "response.headers",
  op: "append",
  target: {
    key: "<key>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `type`                                                                                         | [models.CreateDeploymentRoutesType](../models/createdeploymentroutestype.md)                   | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `op`                                                                                           | [models.CreateDeploymentRoutesDeploymentsOp](../models/createdeploymentroutesdeploymentsop.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `target`                                                                                       | [models.CreateDeploymentRoutesTarget](../models/createdeploymentroutestarget.md)               | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `args`                                                                                         | *models.CreateDeploymentRoutesArgs*                                                            | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `env`                                                                                          | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | N/A                                                                                            |