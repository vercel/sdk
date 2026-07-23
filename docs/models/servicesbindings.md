# ServicesBindings

Caller-side bindings to other services.

## Example Usage

```typescript
import { ServicesBindings } from "@vercel/sdk/models/createdeploymentrouteslocale.js";

let value: ServicesBindings = {
  type: "service",
  service: "<value>",
  format: "url",
  env: "<value>",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [models.CreateDeploymentServicesDeploymentsResponseType](../models/createdeploymentservicesdeploymentsresponsetype.md) | :heavy_check_mark:                                                                                                     | Must be `"service"` for Service-to-Service HTTP bindings.                                                              |
| `service`                                                                                                              | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Target service name from `services`.                                                                                   |
| `format`                                                                                                               | [models.ServicesFormat](../models/servicesformat.md)                                                                   | :heavy_check_mark:                                                                                                     | Generated value shape, must be `"url"`.                                                                                |
| `env`                                                                                                                  | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Environment variable name that will store the generated value                                                          |