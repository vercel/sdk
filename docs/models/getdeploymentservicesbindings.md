# GetDeploymentServicesBindings

Caller-side bindings to other services.

## Example Usage

```typescript
import { GetDeploymentServicesBindings } from "@vercel/sdk/models/getdeploymentmissingdeploymentsresponse1.js";

let value: GetDeploymentServicesBindings = {
  type: "service",
  service: "<value>",
  format: "url",
  env: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `type`                                                                                           | [models.GetDeploymentServicesDeploymentsType](../models/getdeploymentservicesdeploymentstype.md) | :heavy_check_mark:                                                                               | Must be `"service"` for Service-to-Service HTTP bindings.                                        |
| `service`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | Target service name from `services`.                                                             |
| `format`                                                                                         | [models.GetDeploymentServicesFormat](../models/getdeploymentservicesformat.md)                   | :heavy_check_mark:                                                                               | Generated value shape, must be `"url"`.                                                          |
| `env`                                                                                            | *string*                                                                                         | :heavy_check_mark:                                                                               | Environment variable name that will store the generated value                                    |