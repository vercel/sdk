# DeleteProjectAvatarInternalRoutes2

## Example Usage

```typescript
import { DeleteProjectAvatarInternalRoutes2 } from "@vercel/sdk/models/deleteprojectavatarreadysubstate.js";

let value: DeleteProjectAvatarInternalRoutes2 = {
  has: [
    {
      key: "x-vercel-ip-country",
      type: "header",
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
| `has`                                                                                                      | *models.DeleteProjectAvatarInternalRoutesHas*[]                                                            | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `mitigate`                                                                                                 | [models.DeleteProjectAvatarInternalRoutesMitigate](../models/deleteprojectavatarinternalroutesmitigate.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `src`                                                                                                      | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |