# ServicesTransforms

## Example Usage

```typescript
import { ServicesTransforms } from "@vercel/sdk/models/createdeploymentrouteslocale.js";

let value: ServicesTransforms = {
  type: "request.path",
  op: "set",
  args: "<value>",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [models.CreateDeploymentServicesDeploymentsResponseType](../models/createdeploymentservicesdeploymentsresponsetype.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `op`                                                                                                                   | [models.ServicesOp](../models/servicesop.md)                                                                           | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `args`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `env`                                                                                                                  | *string*[]                                                                                                             | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |