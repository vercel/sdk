# GetDeploymentServicesTransforms

## Example Usage

```typescript
import { GetDeploymentServicesTransforms } from "@vercel/sdk/models/getdeploymentservicesdeploymentsbindings.js";

let value: GetDeploymentServicesTransforms = {
  args: "<value>",
  op: "set",
  type: "request.path",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `args`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `env`                                                                                                                  | *string*[]                                                                                                             | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `fallback`                                                                                                             | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | Keep an earlier request.path value. Builders use this for fallback routes.                                             |
| `op`                                                                                                                   | [models.GetDeploymentServicesOp](../models/getdeploymentservicesop.md)                                                 | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `type`                                                                                                                 | [models.GetDeploymentServicesDeploymentsResponse200Type](../models/getdeploymentservicesdeploymentsresponse200type.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |