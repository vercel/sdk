# UpdateProjectDataCacheConnectConfigurations

## Example Usage

```typescript
import { UpdateProjectDataCacheConnectConfigurations } from "@vercel/sdk/models/updateprojectdatacacheop.js";

let value: UpdateProjectDataCacheConnectConfigurations = {
  envId: "<id>",
  connectConfigurationId: "<id>",
  passive: false,
  buildsEnabled: false,
  createdAt: 2203.33,
  updatedAt: 8347.64,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `envId`                                                                    | *models.UpdateProjectDataCacheEnvId*                                       | :heavy_check_mark:                                                         | N/A                                                                        |
| `connectConfigurationId`                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `passive`                                                                  | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `buildsEnabled`                                                            | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `aws`                                                                      | [models.UpdateProjectDataCacheAws](../models/updateprojectdatacacheaws.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `createdAt`                                                                | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `updatedAt`                                                                | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |