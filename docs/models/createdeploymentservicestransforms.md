# CreateDeploymentServicesTransforms

## Example Usage

```typescript
import { CreateDeploymentServicesTransforms } from "@vercel/sdk/models/createdeploymentrouteslocale.js";

let value: CreateDeploymentServicesTransforms = {
  type: "request.path",
  op: "set",
  args: "<value>",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                       | [models.CreateDeploymentServicesDeploymentsResponse200Type](../models/createdeploymentservicesdeploymentsresponse200type.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `op`                                                                                                                         | [models.CreateDeploymentServicesOp](../models/createdeploymentservicesop.md)                                                 | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `args`                                                                                                                       | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `env`                                                                                                                        | *string*[]                                                                                                                   | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |