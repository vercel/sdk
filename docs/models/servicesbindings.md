# ServicesBindings

Caller-side bindings to other services.

## Example Usage

```typescript
import { ServicesBindings } from "@vercel/sdk/models/createdeploymenttransformsdeploymentsresponsetype.js";

let value: ServicesBindings = {
  service: "<value>",
  format: "url",
  env: "<value>",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [models.CreateDeploymentServicesDeploymentsResponseType](../models/createdeploymentservicesdeploymentsresponsetype.md) | :heavy_minus_sign:                                                                                                     | If present, must be `"service"` for Service-to-Service HTTP bindings.                                                  |
| `service`                                                                                                              | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Target service name from `services`.                                                                                   |
| `format`                                                                                                               | [models.ServicesFormat](../models/servicesformat.md)                                                                   | :heavy_check_mark:                                                                                                     | Generated value shape, must be `"url"`.                                                                                |
| `env`                                                                                                                  | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Environment variable name that will store the generated value                                                          |