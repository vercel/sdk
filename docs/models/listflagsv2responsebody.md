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
      externalId: "<id>",
      id: "<id>",
      integrationConfigurationId: "<id>",
      origin: "<value>",
      ownerId: "<id>",
      projectId: "<id>",
      resourceId: "<id>",
      slug: "<value>",
      state: "archived",
      typeName: "marketplaceFlag",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `pagination`                                                       | [models.ListFlagsV2Pagination](../models/listflagsv2pagination.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `data`                                                             | *models.ListFlagsV2Data*[]                                         | :heavy_check_mark:                                                 | N/A                                                                |