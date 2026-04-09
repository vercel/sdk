# GetMicrofrontendsInGroupConnectConfigurations

## Example Usage

```typescript
import { GetMicrofrontendsInGroupConnectConfigurations } from "@vercel/sdk/models/getmicrofrontendsingroupoidctokenconfig.js";

let value: GetMicrofrontendsInGroupConnectConfigurations = {
  envId: "production",
  connectConfigurationId: "<id>",
  passive: true,
  buildsEnabled: false,
  createdAt: 4340.56,
  updatedAt: 6608.99,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `envId`                                                                        | *models.GetMicrofrontendsInGroupEnvId*                                         | :heavy_check_mark:                                                             | N/A                                                                            |
| `connectConfigurationId`                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `dc`                                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `passive`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `buildsEnabled`                                                                | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `aws`                                                                          | [models.GetMicrofrontendsInGroupAws](../models/getmicrofrontendsingroupaws.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `createdAt`                                                                    | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `updatedAt`                                                                    | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |