# UploadProjectAvatarConnectConfigurations

## Example Usage

```typescript
import { UploadProjectAvatarConnectConfigurations } from "@vercel/sdk/models/uploadprojectavatarprojectsresponse200applicationjsontype.js";

let value: UploadProjectAvatarConnectConfigurations = {
  envId: "production",
  connectConfigurationId: "<id>",
  passive: false,
  buildsEnabled: true,
  createdAt: 2334.79,
  updatedAt: 1401.75,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `envId`                                                              | *models.UploadProjectAvatarEnvId*                                    | :heavy_check_mark:                                                   | N/A                                                                  |
| `connectConfigurationId`                                             | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `dc`                                                                 | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `passive`                                                            | *boolean*                                                            | :heavy_check_mark:                                                   | N/A                                                                  |
| `buildsEnabled`                                                      | *boolean*                                                            | :heavy_check_mark:                                                   | N/A                                                                  |
| `aws`                                                                | [models.UploadProjectAvatarAws](../models/uploadprojectavataraws.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
| `createdAt`                                                          | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `updatedAt`                                                          | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |