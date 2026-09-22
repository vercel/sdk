# CreateProjectConnectConfigurations

## Example Usage

```typescript
import { CreateProjectConnectConfigurations } from "@vercel/sdk/models/createprojectcontenthint4.js";

let value: CreateProjectConnectConfigurations = {
  buildsEnabled: true,
  connectConfigurationId: "<id>",
  createdAt: 8919.66,
  envId: "production",
  passive: true,
  updatedAt: 219.2,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `aws`                                                    | [models.CreateProjectAws](../models/createprojectaws.md) | :heavy_minus_sign:                                       | N/A                                                      |
| `buildsEnabled`                                          | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `connectConfigurationId`                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `createdAt`                                              | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `dc`                                                     | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `envId`                                                  | *models.CreateProjectEnvId*                              | :heavy_check_mark:                                       | N/A                                                      |
| `passive`                                                | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `updatedAt`                                              | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |