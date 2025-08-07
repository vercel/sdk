# CreateProjectConnectConfigurations

## Example Usage

```typescript
import { CreateProjectConnectConfigurations } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectConnectConfigurations = {
  envId: "<id>",
  connectConfigurationId: "<id>",
  passive: false,
  buildsEnabled: false,
  createdAt: 6832.38,
  updatedAt: 3013.56,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `envId`                                                  | *models.CreateProjectEnvId*                              | :heavy_check_mark:                                       | N/A                                                      |
| `connectConfigurationId`                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `dc`                                                     | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `passive`                                                | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `buildsEnabled`                                          | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `aws`                                                    | [models.CreateProjectAws](../models/createprojectaws.md) | :heavy_minus_sign:                                       | N/A                                                      |
| `createdAt`                                              | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `updatedAt`                                              | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |