# CreateDeploymentServicesDeploymentsBindings

Bindings to services in the same deployment.

## Example Usage

```typescript
import { CreateDeploymentServicesDeploymentsBindings } from "@vercel/sdk/models/createdeploymentmissingdeployments2.js";

let value: CreateDeploymentServicesDeploymentsBindings = {
  env: "<value>",
  format: "url",
  service: "<value>",
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `env`                                                                                                                                                      | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | Environment variable name that will store the generated value                                                                                              |
| `format`                                                                                                                                                   | [models.CreateDeploymentServicesDeploymentsFormat](../models/createdeploymentservicesdeploymentsformat.md)                                                 | :heavy_check_mark:                                                                                                                                         | Generated value shape, must be `"url"`.                                                                                                                    |
| `service`                                                                                                                                                  | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | Target service name from `services`.                                                                                                                       |
| `type`                                                                                                                                                     | [models.CreateDeploymentServicesDeploymentsResponse200ApplicationJSONType](../models/createdeploymentservicesdeploymentsresponse200applicationjsontype.md) | :heavy_minus_sign:                                                                                                                                         | If present, must be `"service"` for Service-to-Service HTTP bindings.                                                                                      |