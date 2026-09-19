# GetDeploymentServicesBindings

Caller-side bindings to other services.

## Example Usage

```typescript
import { GetDeploymentServicesBindings } from "@vercel/sdk/models/getdeploymentmaxdurationdeployments2.js";

let value: GetDeploymentServicesBindings = {
  env: "<value>",
  format: "url",
  service: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `env`                                                                                            | *string*                                                                                         | :heavy_check_mark:                                                                               | Environment variable name that will store the generated value                                    |
| `format`                                                                                         | [models.GetDeploymentServicesFormat](../models/getdeploymentservicesformat.md)                   | :heavy_check_mark:                                                                               | Generated value shape, must be `"url"`.                                                          |
| `service`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | Target service name from `services`.                                                             |
| `type`                                                                                           | [models.GetDeploymentServicesDeploymentsType](../models/getdeploymentservicesdeploymentstype.md) | :heavy_minus_sign:                                                                               | If present, must be `"service"` for Service-to-Service HTTP bindings.                            |