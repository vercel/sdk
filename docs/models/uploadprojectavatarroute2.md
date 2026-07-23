# UploadProjectAvatarRoute2

## Example Usage

```typescript
import { UploadProjectAvatarRoute2 } from "@vercel/sdk/models/uploadprojectavatartracing.js";

let value: UploadProjectAvatarRoute2 = {
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
| `has`                                                                                    | *models.UploadProjectAvatarRouteHas*[]                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `mitigate`                                                                               | [models.UploadProjectAvatarRouteMitigate](../models/uploadprojectavatarroutemitigate.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `src`                                                                                    | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |