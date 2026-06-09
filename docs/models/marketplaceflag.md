# MarketplaceFlag

## Example Usage

```typescript
import { MarketplaceFlag } from "@vercel/sdk/models/marketplaceflag.js";

let value: MarketplaceFlag = {
  typeName: "marketplaceFlag",
  id: "<id>",
  externalId: "<id>",
  slug: "<value>",
  origin: "<value>",
  ownerId: "<id>",
  projectId: "<id>",
  resourceId: "<id>",
  integrationConfigurationId: "<id>",
  state: "archived",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `typeName`                                                       | *"marketplaceFlag"*                                              | :heavy_check_mark:                                               | N/A                                                              |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `externalId`                                                     | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `slug`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `origin`                                                         | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `ownerId`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `projectId`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `resourceId`                                                     | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `integrationConfigurationId`                                     | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `state`                                                          | [models.MarketplaceFlagState](../models/marketplaceflagstate.md) | :heavy_check_mark:                                               | N/A                                                              |
| `name`                                                           | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `description`                                                    | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `category`                                                       | [models.Category](../models/category.md)                         | :heavy_minus_sign:                                               | N/A                                                              |
| `createdAt`                                                      | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `updatedAt`                                                      | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |