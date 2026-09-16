# CancelDeploymentTransforms2

## Example Usage

```typescript
import { CancelDeploymentTransforms2 } from "@vercel/sdk/models/canceldeploymentresponsebody.js";

let value: CancelDeploymentTransforms2 = {
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
| `op`                                                                                                   | [models.CancelDeploymentTransformsDeploymentsOp](../models/canceldeploymenttransformsdeploymentsop.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `type`                                                                                                 | *"request.path"*                                                                                       | :heavy_check_mark:                                                                                     | N/A                                                                                                    |