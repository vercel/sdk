# UpdateStaticIpsResponseBody

## Example Usage

```typescript
import { UpdateStaticIpsResponseBody } from "@vercel/sdk/models/updatestaticipsop.js";

let value: UpdateStaticIpsResponseBody = {
  buildsEnabled: false,
  connectConfigurationId: "<id>",
  createdAt: 6857.32,
  envId: "<id>",
  passive: false,
  updatedAt: 5800.32,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `aws`                                                        | [models.UpdateStaticIpsAws](../models/updatestaticipsaws.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `buildsEnabled`                                              | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `connectConfigurationId`                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `createdAt`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `dc`                                                         | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `envId`                                                      | *models.UpdateStaticIpsEnvId*                                | :heavy_check_mark:                                           | N/A                                                          |
| `passive`                                                    | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `updatedAt`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |