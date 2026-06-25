# CancelDeploymentTransforms2

## Example Usage

```typescript
import { CancelDeploymentTransforms2 } from "@vercel/sdk/models/canceldeploymentservicesdeploymentsfunctions.js";

let value: CancelDeploymentTransforms2 = {
  type: "request.path",
  op: "set",
  args: "<value>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | *"request.path"*                                                                                       | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `op`                                                                                                   | [models.CancelDeploymentTransformsDeploymentsOp](../models/canceldeploymenttransformsdeploymentsop.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `args`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `env`                                                                                                  | *string*[]                                                                                             | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |