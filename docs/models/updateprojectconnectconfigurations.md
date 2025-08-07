# UpdateProjectConnectConfigurations

## Example Usage

```typescript
import { UpdateProjectConnectConfigurations } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectConnectConfigurations = {
  envId: "preview",
  connectConfigurationId: "<id>",
  passive: true,
  buildsEnabled: false,
  createdAt: 9052.12,
  updatedAt: 5336.37,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `envId`                                                  | *models.UpdateProjectEnvId*                              | :heavy_check_mark:                                       | N/A                                                      |
| `connectConfigurationId`                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `dc`                                                     | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `passive`                                                | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `buildsEnabled`                                          | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `aws`                                                    | [models.UpdateProjectAws](../models/updateprojectaws.md) | :heavy_minus_sign:                                       | N/A                                                      |
| `createdAt`                                              | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `updatedAt`                                              | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |