# CreateDeploymentTransformsDeployments2

## Example Usage

```typescript
import { CreateDeploymentTransformsDeployments2 } from "@vercel/sdk/models/createdeploymentresponsebodyduration.js";

let value: CreateDeploymentTransformsDeployments2 = {
  args: "<value>",
  op: "set",
  type: "request.path",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `args`                                                                                                                       | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `env`                                                                                                                        | *string*[]                                                                                                                   | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `fallback`                                                                                                                   | *boolean*                                                                                                                    | :heavy_minus_sign:                                                                                                           | Keep an earlier request.path value. Builders use this for fallback routes.                                                   |
| `op`                                                                                                                         | [models.CreateDeploymentTransformsDeploymentsResponse200Op](../models/createdeploymenttransformsdeploymentsresponse200op.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `type`                                                                                                                       | *"request.path"*                                                                                                             | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |