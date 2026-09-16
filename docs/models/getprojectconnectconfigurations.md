# GetProjectConnectConfigurations

## Example Usage

```typescript
import { GetProjectConnectConfigurations } from "@vercel/sdk/models/getprojecthas2.js";

let value: GetProjectConnectConfigurations = {
  buildsEnabled: false,
  connectConfigurationId: "<id>",
  createdAt: 600.04,
  envId: "production",
  passive: true,
  updatedAt: 9067.8,
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `aws`                                              | [models.GetProjectAws](../models/getprojectaws.md) | :heavy_minus_sign:                                 | N/A                                                |
| `buildsEnabled`                                    | *boolean*                                          | :heavy_check_mark:                                 | N/A                                                |
| `connectConfigurationId`                           | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `createdAt`                                        | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `dc`                                               | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `envId`                                            | *models.GetProjectEnvId*                           | :heavy_check_mark:                                 | N/A                                                |
| `passive`                                          | *boolean*                                          | :heavy_check_mark:                                 | N/A                                                |
| `updatedAt`                                        | *number*                                           | :heavy_check_mark:                                 | N/A                                                |