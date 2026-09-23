# GetProjectsResponseBodyServices

## Example Usage

```typescript
import { GetProjectsResponseBodyServices } from "@vercel/sdk/models/responsebodytrustedips.js";

let value: GetProjectsResponseBodyServices = {
  serviceName: "<value>",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `framework`                                                                                                              | [models.GetProjectsResponseBodyProjectsResponseFramework](../models/getprojectsresponsebodyprojectsresponseframework.md) | :heavy_minus_sign:                                                                                                       | Framework slug, when the service has one (omitted otherwise).                                                            |
| `runtime`                                                                                                                | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Generic runtime, e.g. 'node' \| 'python' \| 'go' \| 'ruby' \| 'rust' (Service.runtime). Omitted for static builds.       |
| `serviceName`                                                                                                            | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Service name from the deployment (Service.name).                                                                         |
| `serviceType`                                                                                                            | [models.ResponseBodyServiceType](../models/responsebodyservicetype.md)                                                   | :heavy_minus_sign:                                                                                                       | Service kind (Service.type). Omitted for schemas that do not define one.                                                 |