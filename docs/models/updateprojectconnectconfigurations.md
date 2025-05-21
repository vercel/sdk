# UpdateProjectConnectConfigurations

## Example Usage

```typescript
import { UpdateProjectConnectConfigurations } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectConnectConfigurations = {
  envId: "production",
  connectConfigurationId: "<id>",
  passive: false,
  buildsEnabled: false,
  createdAt: 3821.33,
  updatedAt: 6200.19,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `envId`                                                  | *models.UpdateProjectEnvId*                              | :heavy_check_mark:                                       | N/A                                                      |
| `connectConfigurationId`                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `passive`                                                | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `buildsEnabled`                                          | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `aws`                                                    | [models.UpdateProjectAws](../models/updateprojectaws.md) | :heavy_minus_sign:                                       | N/A                                                      |
| `createdAt`                                              | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `updatedAt`                                              | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |