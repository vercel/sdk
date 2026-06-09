# ListFlagsV2ResponseBody

## Example Usage

```typescript
import { ListFlagsV2ResponseBody } from "@vercel/sdk/models/listflagsv2op.js";

let value: ListFlagsV2ResponseBody = {
  pagination: {
    next: "<value>",
  },
  data: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `pagination`                                                       | [models.ListFlagsV2Pagination](../models/listflagsv2pagination.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `data`                                                             | *models.ListFlagsV2Data*[]                                         | :heavy_check_mark:                                                 | N/A                                                                |