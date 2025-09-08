# GetProjectsRouteProjects2

## Example Usage

```typescript
import { GetProjectsRouteProjects2 } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsRouteProjects2 = {
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

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `has`                                                                                    | *models.GetProjectsRouteProjectsHas*[]                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `mitigate`                                                                               | [models.GetProjectsRouteProjectsMitigate](../models/getprojectsrouteprojectsmitigate.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `src`                                                                                    | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |