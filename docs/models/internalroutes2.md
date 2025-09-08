# InternalRoutes2

## Example Usage

```typescript
import { InternalRoutes2 } from "@vercel/sdk/models/updateprojectdatacacheop.js";

let value: InternalRoutes2 = {
  has: [
    {
      type: "host",
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

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `has`                                                                                                            | *models.Has*[]                                                                                                   | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `mitigate`                                                                                                       | [models.UpdateProjectDataCacheInternalRoutesMitigate](../models/updateprojectdatacacheinternalroutesmitigate.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `src`                                                                                                            | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |