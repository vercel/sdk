# UpdateMicrofrontendsServices

## Example Usage

```typescript
import { UpdateMicrofrontendsServices } from "@vercel/sdk/models/updatemicrofrontendsssoprotection.js";

let value: UpdateMicrofrontendsServices = {
  serviceName: "<value>",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `serviceName`                                                                                                  | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Service name from the deployment (Service.name).                                                               |
| `serviceType`                                                                                                  | [models.UpdateMicrofrontendsServiceType](../models/updatemicrofrontendsservicetype.md)                         | :heavy_minus_sign:                                                                                             | Service kind (Service.type). Omitted for schemas that do not define one.                                       |
| `framework`                                                                                                    | [models.UpdateMicrofrontendsProjectsFramework](../models/updatemicrofrontendsprojectsframework.md)             | :heavy_minus_sign:                                                                                             | Framework slug, when the service has one (omitted otherwise).                                                  |
| `runtime`                                                                                                      | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Generic runtime, e.g. 'node' \| 'python' \| 'go' \| 'ruby' \| 'rust' (Service.runtime). Omitted for static builds. |