# CreateProjectServices

## Example Usage

```typescript
import { CreateProjectServices } from "@vercel/sdk/models/createprojectapril2026securityincidentmigrationappliedfrom.js";

let value: CreateProjectServices = {
  serviceName: "<value>",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `serviceName`                                                                                                  | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Service name from the deployment (Service.name).                                                               |
| `serviceType`                                                                                                  | [models.CreateProjectServiceType](../models/createprojectservicetype.md)                                       | :heavy_minus_sign:                                                                                             | Service kind (Service.type). Omitted for schemas that do not define one.                                       |
| `framework`                                                                                                    | [models.CreateProjectProjectsResponseFramework](../models/createprojectprojectsresponseframework.md)           | :heavy_minus_sign:                                                                                             | Framework slug, when the service has one (omitted otherwise).                                                  |
| `runtime`                                                                                                      | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Generic runtime, e.g. 'node' \| 'python' \| 'go' \| 'ruby' \| 'rust' (Service.runtime). Omitted for static builds. |