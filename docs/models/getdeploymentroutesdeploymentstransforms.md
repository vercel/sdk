# GetDeploymentRoutesDeploymentsTransforms

## Example Usage

```typescript
import { GetDeploymentRoutesDeploymentsTransforms } from "@vercel/sdk/models/getdeploymentresponsebody.js";

let value: GetDeploymentRoutesDeploymentsTransforms = {
  type: "request.headers",
  op: "set",
  target: {
    key: {},
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `type`                                                                                           | [models.GetDeploymentRoutesDeploymentsType](../models/getdeploymentroutesdeploymentstype.md)     | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `op`                                                                                             | [models.GetDeploymentRoutesDeploymentsOp](../models/getdeploymentroutesdeploymentsop.md)         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `target`                                                                                         | [models.GetDeploymentRoutesDeploymentsTarget](../models/getdeploymentroutesdeploymentstarget.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `args`                                                                                           | *models.GetDeploymentRoutesDeploymentsArgs*                                                      | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `env`                                                                                            | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | N/A                                                                                              |