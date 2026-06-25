# GetDeploymentTransforms2

## Example Usage

```typescript
import { GetDeploymentTransforms2 } from "@vercel/sdk/models/getdeploymentmissingdeploymentsresponse1.js";

let value: GetDeploymentTransforms2 = {
  type: "request.path",
  op: "set",
  args: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `type`                                                                                           | *"request.path"*                                                                                 | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `op`                                                                                             | [models.GetDeploymentTransformsDeploymentsOp](../models/getdeploymenttransformsdeploymentsop.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `args`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `env`                                                                                            | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | N/A                                                                                              |