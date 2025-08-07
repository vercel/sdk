# NewConnectConfigurations

## Example Usage

```typescript
import { NewConnectConfigurations } from "@vercel/sdk/models/userevent.js";

let value: NewConnectConfigurations = {
  envId: "<id>",
  connectConfigurationId: "<id>",
  passive: true,
  buildsEnabled: false,
  createdAt: 5463.76,
  updatedAt: 2696.76,
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `envId`                                      | *models.PayloadEnvId*                        | :heavy_check_mark:                           | N/A                                          |
| `connectConfigurationId`                     | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `dc`                                         | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `passive`                                    | *boolean*                                    | :heavy_check_mark:                           | N/A                                          |
| `buildsEnabled`                              | *boolean*                                    | :heavy_check_mark:                           | N/A                                          |
| `aws`                                        | [models.PayloadAws](../models/payloadaws.md) | :heavy_minus_sign:                           | N/A                                          |
| `createdAt`                                  | *number*                                     | :heavy_check_mark:                           | N/A                                          |
| `updatedAt`                                  | *number*                                     | :heavy_check_mark:                           | N/A                                          |