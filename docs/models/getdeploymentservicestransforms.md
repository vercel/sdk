# GetDeploymentServicesTransforms

## Example Usage

```typescript
import { GetDeploymentServicesTransforms } from "@vercel/sdk/models/getdeploymentmissingdeploymentsresponse1.js";

let value: GetDeploymentServicesTransforms = {
  type: "request.path",
  op: "set",
  args: "<value>",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [models.GetDeploymentServicesDeploymentsResponse200Type](../models/getdeploymentservicesdeploymentsresponse200type.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `op`                                                                                                                   | [models.GetDeploymentServicesOp](../models/getdeploymentservicesop.md)                                                 | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `args`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `env`                                                                                                                  | *string*[]                                                                                                             | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |