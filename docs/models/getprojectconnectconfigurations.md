# GetProjectConnectConfigurations

## Example Usage

```typescript
import { GetProjectConnectConfigurations } from "@vercel/sdk/models/getprojecttargets.js";

let value: GetProjectConnectConfigurations = {
  envId: "preview",
  connectConfigurationId: "<id>",
  passive: false,
  buildsEnabled: false,
  createdAt: 1861.72,
  updatedAt: 9067.8,
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `envId`                                            | *models.GetProjectEnvId*                           | :heavy_check_mark:                                 | N/A                                                |
| `connectConfigurationId`                           | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `dc`                                               | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `passive`                                          | *boolean*                                          | :heavy_check_mark:                                 | N/A                                                |
| `buildsEnabled`                                    | *boolean*                                          | :heavy_check_mark:                                 | N/A                                                |
| `aws`                                              | [models.GetProjectAws](../models/getprojectaws.md) | :heavy_minus_sign:                                 | N/A                                                |
| `createdAt`                                        | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `updatedAt`                                        | *number*                                           | :heavy_check_mark:                                 | N/A                                                |