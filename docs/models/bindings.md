# Bindings

Caller-side bindings to other services.

## Example Usage

```typescript
import { Bindings } from "@vercel/sdk/models/includefiles.js";

let value: Bindings = {
  type: "service",
  service: "<value>",
  format: "url",
  env: "<value>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [models.CreateDeploymentServicesDeploymentsType](../models/createdeploymentservicesdeploymentstype.md) | :heavy_check_mark:                                                                                     | Must be `"service"` for Service-to-Service HTTP bindings.                                              |
| `service`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | Target service name from `experimentalServicesV2`.                                                     |
| `format`                                                                                               | [models.Format](../models/format.md)                                                                   | :heavy_check_mark:                                                                                     | Generated value shape, must be `"url"`.                                                                |
| `env`                                                                                                  | *string*                                                                                               | :heavy_check_mark:                                                                                     | Environment variable name that will store the generated value                                          |