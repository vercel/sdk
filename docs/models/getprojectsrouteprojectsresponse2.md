# GetProjectsRouteProjectsResponse2

## Example Usage

```typescript
import { GetProjectsRouteProjectsResponse2 } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsRouteProjectsResponse2 = {
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

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `has`                                                                                                    | *models.GetProjectsRouteProjectsResponseHas*[]                                                           | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `mitigate`                                                                                               | [models.GetProjectsRouteProjectsResponseMitigate](../models/getprojectsrouteprojectsresponsemitigate.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `src`                                                                                                    | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |