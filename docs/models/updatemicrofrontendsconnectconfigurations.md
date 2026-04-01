# UpdateMicrofrontendsConnectConfigurations

## Example Usage

```typescript
import { UpdateMicrofrontendsConnectConfigurations } from "@vercel/sdk/models/updatemicrofrontendsop.js";

let value: UpdateMicrofrontendsConnectConfigurations = {
  envId: "<id>",
  connectConfigurationId: "<id>",
  passive: false,
  buildsEnabled: true,
  createdAt: 805.47,
  updatedAt: 7608.59,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `envId`                                                                | *models.UpdateMicrofrontendsEnvId*                                     | :heavy_check_mark:                                                     | N/A                                                                    |
| `connectConfigurationId`                                               | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `dc`                                                                   | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `passive`                                                              | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `buildsEnabled`                                                        | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `aws`                                                                  | [models.UpdateMicrofrontendsAws](../models/updatemicrofrontendsaws.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `createdAt`                                                            | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `updatedAt`                                                            | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |