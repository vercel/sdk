# ResponseBodyConnectConfigurations

## Example Usage

```typescript
import { ResponseBodyConnectConfigurations } from "@vercel/sdk/models/responsebodyexpiration.js";

let value: ResponseBodyConnectConfigurations = {
  buildsEnabled: false,
  connectConfigurationId: "<id>",
  createdAt: 9300.43,
  envId: "preview",
  passive: true,
  updatedAt: 6080.32,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `aws`                                                  | [models.ResponseBodyAws](../models/responsebodyaws.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `buildsEnabled`                                        | *boolean*                                              | :heavy_check_mark:                                     | N/A                                                    |
| `connectConfigurationId`                               | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `createdAt`                                            | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `dc`                                                   | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `envId`                                                | *models.ResponseBodyEnvId*                             | :heavy_check_mark:                                     | N/A                                                    |
| `passive`                                              | *boolean*                                              | :heavy_check_mark:                                     | N/A                                                    |
| `updatedAt`                                            | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |