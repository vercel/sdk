# UpdateSharedConnectLinksResponseBody

## Example Usage

```typescript
import { UpdateSharedConnectLinksResponseBody } from "@vercel/sdk/models/updatesharedconnectlinksop.js";

let value: UpdateSharedConnectLinksResponseBody = {
  envId: "production",
  connectConfigurationId: "<id>",
  passive: true,
  buildsEnabled: false,
  createdAt: 7200.41,
  updatedAt: 3460.01,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `envId`                                                                        | *models.UpdateSharedConnectLinksEnvId*                                         | :heavy_check_mark:                                                             | N/A                                                                            |
| `connectConfigurationId`                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `dc`                                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `passive`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `buildsEnabled`                                                                | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `aws`                                                                          | [models.UpdateSharedConnectLinksAws](../models/updatesharedconnectlinksaws.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `createdAt`                                                                    | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `updatedAt`                                                                    | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |