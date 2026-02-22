# GetDeploymentRoutesTransforms

## Example Usage

```typescript
import { GetDeploymentRoutesTransforms } from "@vercel/sdk/models/getdeploymentresponsebody.js";

let value: GetDeploymentRoutesTransforms = {
  type: "response.headers",
  op: "delete",
  target: {
    key: {},
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `type`                                                                     | [models.GetDeploymentRoutesType](../models/getdeploymentroutestype.md)     | :heavy_check_mark:                                                         | N/A                                                                        |
| `op`                                                                       | [models.GetDeploymentRoutesOp](../models/getdeploymentroutesop.md)         | :heavy_check_mark:                                                         | N/A                                                                        |
| `target`                                                                   | [models.GetDeploymentRoutesTarget](../models/getdeploymentroutestarget.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `args`                                                                     | *models.GetDeploymentRoutesArgs*                                           | :heavy_minus_sign:                                                         | N/A                                                                        |
| `env`                                                                      | *string*[]                                                                 | :heavy_minus_sign:                                                         | N/A                                                                        |