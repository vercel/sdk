# UpdateProjectDataCacheConnectConfigurations

## Example Usage

```typescript
import { UpdateProjectDataCacheConnectConfigurations } from "@vercel/sdk/models/updateprojectdatacacheop.js";

let value: UpdateProjectDataCacheConnectConfigurations = {
  envId: "<id>",
  connectConfigurationId: "<id>",
  passive: true,
  buildsEnabled: false,
  createdAt: 1411.89,
  updatedAt: 7659.5,
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