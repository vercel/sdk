# ServicesTransforms

## Example Usage

```typescript
import { ServicesTransforms } from "@vercel/sdk/models/canceldeploymentresponsebody.js";

let value: ServicesTransforms = {
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
| `op`                                                                                                                   | [models.ServicesOp](../models/servicesop.md)                                                                           | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `type`                                                                                                                 | [models.CancelDeploymentServicesDeploymentsResponseType](../models/canceldeploymentservicesdeploymentsresponsetype.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |