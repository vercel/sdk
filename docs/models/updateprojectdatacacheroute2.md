# UpdateProjectDataCacheRoute2

## Example Usage

```typescript
import { UpdateProjectDataCacheRoute2 } from "@vercel/sdk/models/updateprojectdatacacheop.js";

let value: UpdateProjectDataCacheRoute2 = {
  has: [
    {
      type: "header",
      key: "x-vercel-ip-country",
      value: {
        eq: "<value>",
      },
    },
  ],
  mitigate: {
    action: "block_legal_cwc",
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `has`                                              | *models.RouteHas*[]                                | :heavy_check_mark:                                 | N/A                                                |
| `mitigate`                                         | [models.RouteMitigate](../models/routemitigate.md) | :heavy_check_mark:                                 | N/A                                                |
| `src`                                              | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |