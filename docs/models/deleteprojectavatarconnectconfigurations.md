# DeleteProjectAvatarConnectConfigurations

## Example Usage

```typescript
import { DeleteProjectAvatarConnectConfigurations } from "@vercel/sdk/models/deleteprojectavatarreadysubstate.js";

let value: DeleteProjectAvatarConnectConfigurations = {
  buildsEnabled: true,
  connectConfigurationId: "<id>",
  createdAt: 7279.67,
  envId: "preview",
  passive: true,
  updatedAt: 1209.22,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `aws`                                                                | [models.DeleteProjectAvatarAws](../models/deleteprojectavataraws.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
| `buildsEnabled`                                                      | *boolean*                                                            | :heavy_check_mark:                                                   | N/A                                                                  |
| `connectConfigurationId`                                             | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `createdAt`                                                          | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `dc`                                                                 | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `envId`                                                              | *models.DeleteProjectAvatarEnvId*                                    | :heavy_check_mark:                                                   | N/A                                                                  |
| `passive`                                                            | *boolean*                                                            | :heavy_check_mark:                                                   | N/A                                                                  |
| `updatedAt`                                                          | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |