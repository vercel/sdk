# CreateDeploymentTransforms2

## Example Usage

```typescript
import { CreateDeploymentTransforms2 } from "@vercel/sdk/models/createdeploymentmissingdeploymentsresponse200applicationjsonresponsebodytype.js";

let value: CreateDeploymentTransforms2 = {
  args: "<value>",
  op: "set",
  type: "request.path",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `args`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `env`                                                                                                  | *string*[]                                                                                             | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `op`                                                                                                   | [models.CreateDeploymentTransformsDeploymentsOp](../models/createdeploymenttransformsdeploymentsop.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `type`                                                                                                 | *"request.path"*                                                                                       | :heavy_check_mark:                                                                                     | N/A                                                                                                    |