# UpdateStaticIpsResponseBody

## Example Usage

```typescript
import { UpdateStaticIpsResponseBody } from "@vercel/sdk/models/updatestaticipsop.js";

let value: UpdateStaticIpsResponseBody = {
  envId: "production",
  connectConfigurationId: "<id>",
  passive: true,
  buildsEnabled: false,
  createdAt: 5800.32,
  updatedAt: 162.42,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `envId`                                                      | *models.UpdateStaticIpsEnvId*                                | :heavy_check_mark:                                           | N/A                                                          |
| `connectConfigurationId`                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `dc`                                                         | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `passive`                                                    | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `buildsEnabled`                                              | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `aws`                                                        | [models.UpdateStaticIpsAws](../models/updatestaticipsaws.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `createdAt`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `updatedAt`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |