# CancelDeploymentServicesDeploymentsBindings

Bindings to services in the same deployment.

## Example Usage

```typescript
import { CancelDeploymentServicesDeploymentsBindings } from "@vercel/sdk/models/canceldeploymenthasdeploymentsresponse200applicationjsonresponsebodyservicesvalue.js";

let value: CancelDeploymentServicesDeploymentsBindings = {
  env: "<value>",
  format: "url",
  service: "<value>",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `env`                                                                                                                        | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | Environment variable name that will store the generated value                                                                |
| `format`                                                                                                                     | [models.CancelDeploymentServicesDeploymentsFormat](../models/canceldeploymentservicesdeploymentsformat.md)                   | :heavy_check_mark:                                                                                                           | Generated value shape, must be `"url"`.                                                                                      |
| `service`                                                                                                                    | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | Target service name from `services`.                                                                                         |
| `type`                                                                                                                       | [models.CancelDeploymentServicesDeploymentsResponse200Type](../models/canceldeploymentservicesdeploymentsresponse200type.md) | :heavy_minus_sign:                                                                                                           | If present, must be `"service"` for Service-to-Service HTTP bindings.                                                        |