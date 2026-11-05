# CreateDeploymentServicesTransforms

## Example Usage

```typescript
import { CreateDeploymentServicesTransforms } from "@vercel/sdk/models/createdeploymentresponsebodyduration.js";

let value: CreateDeploymentServicesTransforms = {
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
| `op`                                                                                                                         | [models.CreateDeploymentServicesOp](../models/createdeploymentservicesop.md)                                                 | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `type`                                                                                                                       | [models.CreateDeploymentServicesDeploymentsResponse200Type](../models/createdeploymentservicesdeploymentsresponse200type.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |