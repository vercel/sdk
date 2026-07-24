# UploadProjectAvatarRouteProjects2

## Example Usage

```typescript
import { UploadProjectAvatarRouteProjects2 } from "@vercel/sdk/models/uploadprojectavatartracing.js";

let value: UploadProjectAvatarRouteProjects2 = {
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
| `has`                                                                                                    | *models.UploadProjectAvatarRouteProjectsHas*[]                                                           | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `mitigate`                                                                                               | [models.UploadProjectAvatarRouteProjectsMitigate](../models/uploadprojectavatarrouteprojectsmitigate.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `src`                                                                                                    | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |