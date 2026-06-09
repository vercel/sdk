# UploadProjectAvatarServices

## Example Usage

```typescript
import { UploadProjectAvatarServices } from "@vercel/sdk/models/uploadprojectavatarprojectsresponse200applicationjsonresponsebodysecurityaction.js";

let value: UploadProjectAvatarServices = {
  serviceName: "<value>",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `serviceName`                                                                                                  | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Service name from the deployment (Service.name).                                                               |
| `serviceType`                                                                                                  | [models.UploadProjectAvatarServiceType](../models/uploadprojectavatarservicetype.md)                           | :heavy_minus_sign:                                                                                             | Service kind (Service.type). Omitted for schemas that do not define one.                                       |
| `framework`                                                                                                    | [models.UploadProjectAvatarProjectsFramework](../models/uploadprojectavatarprojectsframework.md)               | :heavy_minus_sign:                                                                                             | Framework slug, when the service has one (omitted otherwise).                                                  |
| `runtime`                                                                                                      | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Generic runtime, e.g. 'node' \| 'python' \| 'go' \| 'ruby' \| 'rust' (Service.runtime). Omitted for static builds. |