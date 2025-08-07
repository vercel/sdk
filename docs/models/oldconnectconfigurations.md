# OldConnectConfigurations

## Example Usage

```typescript
import { OldConnectConfigurations } from "@vercel/sdk/models/userevent.js";

let value: OldConnectConfigurations = {
  envId: "<id>",
  connectConfigurationId: "<id>",
  passive: false,
  buildsEnabled: true,
  createdAt: 9005.75,
  updatedAt: 8968.35,
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `envId`                        | *models.EnvId*                 | :heavy_check_mark:             | N/A                            |
| `connectConfigurationId`       | *string*                       | :heavy_check_mark:             | N/A                            |
| `dc`                           | *string*                       | :heavy_minus_sign:             | N/A                            |
| `passive`                      | *boolean*                      | :heavy_check_mark:             | N/A                            |
| `buildsEnabled`                | *boolean*                      | :heavy_check_mark:             | N/A                            |
| `aws`                          | [models.Aws](../models/aws.md) | :heavy_minus_sign:             | N/A                            |
| `createdAt`                    | *number*                       | :heavy_check_mark:             | N/A                            |
| `updatedAt`                    | *number*                       | :heavy_check_mark:             | N/A                            |