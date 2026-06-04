# UploadProjectAvatarInternalRoutes2

## Example Usage

```typescript
import { UploadProjectAvatarInternalRoutes2 } from "@vercel/sdk/models/uploadprojectavatarresponsebody.js";

let value: UploadProjectAvatarInternalRoutes2 = {
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

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `has`                                                                                                      | *models.UploadProjectAvatarInternalRoutesHas*[]                                                            | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `mitigate`                                                                                                 | [models.UploadProjectAvatarInternalRoutesMitigate](../models/uploadprojectavatarinternalroutesmitigate.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `src`                                                                                                      | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |