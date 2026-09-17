# NewConnectConfigurations

## Example Usage

```typescript
import { NewConnectConfigurations } from "@vercel/sdk/models/payloaddefault.js";

let value: NewConnectConfigurations = {
  buildsEnabled: true,
  connectConfigurationId: "<id>",
  createdAt: 4721.36,
  envId: "production",
  passive: true,
  updatedAt: 452.34,
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `aws`                          | [models.Aws](../models/aws.md) | :heavy_minus_sign:             | N/A                            |
| `buildsEnabled`                | *boolean*                      | :heavy_check_mark:             | N/A                            |
| `connectConfigurationId`       | *string*                       | :heavy_check_mark:             | N/A                            |
| `createdAt`                    | *number*                       | :heavy_check_mark:             | N/A                            |
| `dc`                           | *string*                       | :heavy_minus_sign:             | N/A                            |
| `envId`                        | *models.EnvId*                 | :heavy_check_mark:             | N/A                            |
| `passive`                      | *boolean*                      | :heavy_check_mark:             | N/A                            |
| `updatedAt`                    | *number*                       | :heavy_check_mark:             | N/A                            |