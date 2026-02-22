# ResponseBodyConnectConfigurations

## Example Usage

```typescript
import { ResponseBodyConnectConfigurations } from "@vercel/sdk/models/getprojectsblockhistoryprojects3.js";

let value: ResponseBodyConnectConfigurations = {
  envId: "preview",
  connectConfigurationId: "<id>",
  passive: false,
  buildsEnabled: true,
  createdAt: 2582.03,
  updatedAt: 6080.32,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `envId`                                                | *models.ResponseBodyEnvId*                             | :heavy_check_mark:                                     | N/A                                                    |
| `connectConfigurationId`                               | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `dc`                                                   | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `passive`                                              | *boolean*                                              | :heavy_check_mark:                                     | N/A                                                    |
| `buildsEnabled`                                        | *boolean*                                              | :heavy_check_mark:                                     | N/A                                                    |
| `aws`                                                  | [models.ResponseBodyAws](../models/responsebodyaws.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `createdAt`                                            | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `updatedAt`                                            | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |