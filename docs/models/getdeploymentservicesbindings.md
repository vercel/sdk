# GetDeploymentServicesBindings

Caller-side bindings to other services.

## Example Usage

```typescript
import { GetDeploymentServicesBindings } from "@vercel/sdk/models/getdeploymentvaluedeploymentsresponse200applicationjsonresponsebody2services2rewrites2.js";

let value: GetDeploymentServicesBindings = {
  service: "<value>",
  format: "url",
  env: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `type`                                                                                           | [models.GetDeploymentServicesDeploymentsType](../models/getdeploymentservicesdeploymentstype.md) | :heavy_minus_sign:                                                                               | If present, must be `"service"` for Service-to-Service HTTP bindings.                            |
| `service`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | Target service name from `services`.                                                             |
| `format`                                                                                         | [models.GetDeploymentServicesFormat](../models/getdeploymentservicesformat.md)                   | :heavy_check_mark:                                                                               | Generated value shape, must be `"url"`.                                                          |
| `env`                                                                                            | *string*                                                                                         | :heavy_check_mark:                                                                               | Environment variable name that will store the generated value                                    |