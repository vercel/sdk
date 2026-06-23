# CancelDeploymentRoutesTransforms

## Example Usage

```typescript
import { CancelDeploymentRoutesTransforms } from "@vercel/sdk/models/flagsdefinitions.js";

let value: CancelDeploymentRoutesTransforms = {
  type: "request.headers",
  op: "append",
  target: {
    key: "<key>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [models.CancelDeploymentRoutesDeploymentsType](../models/canceldeploymentroutesdeploymentstype.md)     | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `op`                                                                                                   | [models.CancelDeploymentRoutesOp](../models/canceldeploymentroutesop.md)                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `target`                                                                                               | [models.CancelDeploymentRoutesDeploymentsTarget](../models/canceldeploymentroutesdeploymentstarget.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `args`                                                                                                 | *models.CancelDeploymentRoutesArgs*                                                                    | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `env`                                                                                                  | *string*[]                                                                                             | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |