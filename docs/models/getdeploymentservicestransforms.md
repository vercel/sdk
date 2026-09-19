# GetDeploymentServicesTransforms

## Example Usage

```typescript
import { GetDeploymentServicesTransforms } from "@vercel/sdk/models/getdeploymentresponsebodydeploymentsduration.js";

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
| `op`                                                                                                                   | [models.GetDeploymentServicesOp](../models/getdeploymentservicesop.md)                                                 | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `type`                                                                                                                 | [models.GetDeploymentServicesDeploymentsResponse200Type](../models/getdeploymentservicesdeploymentsresponse200type.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |