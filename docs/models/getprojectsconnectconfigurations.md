# GetProjectsConnectConfigurations

## Example Usage

```typescript
import { GetProjectsConnectConfigurations } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsConnectConfigurations = {
  envId: "production",
  connectConfigurationId: "<id>",
  passive: false,
  buildsEnabled: false,
  createdAt: 8361.73,
  updatedAt: 2517.28,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `envId`                                              | *models.GetProjectsEnvId*                            | :heavy_check_mark:                                   | N/A                                                  |
| `connectConfigurationId`                             | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `passive`                                            | *boolean*                                            | :heavy_check_mark:                                   | N/A                                                  |
| `buildsEnabled`                                      | *boolean*                                            | :heavy_check_mark:                                   | N/A                                                  |
| `aws`                                                | [models.GetProjectsAws](../models/getprojectsaws.md) | :heavy_minus_sign:                                   | N/A                                                  |
| `createdAt`                                          | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `updatedAt`                                          | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |