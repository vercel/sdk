# OldConnectConfigurations

## Example Usage

```typescript
import { OldConnectConfigurations } from "@vercel/sdk/models/payloaddefault.js";

let value: OldConnectConfigurations = {
  buildsEnabled: true,
  connectConfigurationId: "<id>",
  createdAt: 7630.36,
  envId: "<id>",
  passive: false,
  updatedAt: 8968.35,
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `aws`                                        | [models.PayloadAws](../models/payloadaws.md) | :heavy_minus_sign:                           | N/A                                          |
| `buildsEnabled`                              | *boolean*                                    | :heavy_check_mark:                           | N/A                                          |
| `connectConfigurationId`                     | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `createdAt`                                  | *number*                                     | :heavy_check_mark:                           | N/A                                          |
| `dc`                                         | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `envId`                                      | *models.PayloadEnvId*                        | :heavy_check_mark:                           | N/A                                          |
| `passive`                                    | *boolean*                                    | :heavy_check_mark:                           | N/A                                          |
| `updatedAt`                                  | *number*                                     | :heavy_check_mark:                           | N/A                                          |