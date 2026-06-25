# CreateDeploymentTransforms2

## Example Usage

```typescript
import { CreateDeploymentTransforms2 } from "@vercel/sdk/models/createdeploymentrouteslocale.js";

let value: CreateDeploymentTransforms2 = {
  type: "request.path",
  op: "set",
  args: "<value>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | *"request.path"*                                                                                       | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `op`                                                                                                   | [models.CreateDeploymentTransformsDeploymentsOp](../models/createdeploymenttransformsdeploymentsop.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `args`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `env`                                                                                                  | *string*[]                                                                                             | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |