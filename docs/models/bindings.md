# Bindings

Caller-side bindings to other services.

## Example Usage

```typescript
import { Bindings } from "@vercel/sdk/models/canceldeploymentdestinationdeploymentstype.js";

let value: Bindings = {
  env: "<value>",
  format: "url",
  service: "<value>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `env`                                                                                                  | *string*                                                                                               | :heavy_check_mark:                                                                                     | Environment variable name that will store the generated value                                          |
| `format`                                                                                               | [models.Format](../models/format.md)                                                                   | :heavy_check_mark:                                                                                     | Generated value shape, must be `"url"`.                                                                |
| `service`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | Target service name from `services`.                                                                   |
| `type`                                                                                                 | [models.CancelDeploymentServicesDeploymentsType](../models/canceldeploymentservicesdeploymentstype.md) | :heavy_minus_sign:                                                                                     | If present, must be `"service"` for Service-to-Service HTTP bindings.                                  |