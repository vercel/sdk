# CreateDeploymentServicesTransforms

## Example Usage

```typescript
import { CreateDeploymentServicesTransforms } from "@vercel/sdk/models/createdeploymentresponsebody.js";

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
| `op`                                                                                                                         | [models.CreateDeploymentServicesOp](../models/createdeploymentservicesop.md)                                                 | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `type`                                                                                                                       | [models.CreateDeploymentServicesDeploymentsResponse200Type](../models/createdeploymentservicesdeploymentsresponse200type.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |