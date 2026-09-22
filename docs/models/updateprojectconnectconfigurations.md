# UpdateProjectConnectConfigurations

## Example Usage

```typescript
import { UpdateProjectConnectConfigurations } from "@vercel/sdk/models/updateprojectcreator.js";

let value: UpdateProjectConnectConfigurations = {
  buildsEnabled: false,
  connectConfigurationId: "<id>",
  createdAt: 2488.86,
  envId: "<id>",
  passive: false,
  updatedAt: 9052.12,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `aws`                                                    | [models.UpdateProjectAws](../models/updateprojectaws.md) | :heavy_minus_sign:                                       | N/A                                                      |
| `buildsEnabled`                                          | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `connectConfigurationId`                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `createdAt`                                              | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `dc`                                                     | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `envId`                                                  | *models.UpdateProjectEnvId*                              | :heavy_check_mark:                                       | N/A                                                      |
| `passive`                                                | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `updatedAt`                                              | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |