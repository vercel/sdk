# UpdateMicrofrontendsRouteProjects2

## Example Usage

```typescript
import { UpdateMicrofrontendsRouteProjects2 } from "@vercel/sdk/models/updatemicrofrontendsop.js";

let value: UpdateMicrofrontendsRouteProjects2 = {
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

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `has`                                                                                                      | *models.UpdateMicrofrontendsRouteProjectsHas*[]                                                            | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `mitigate`                                                                                                 | [models.UpdateMicrofrontendsRouteProjectsMitigate](../models/updatemicrofrontendsrouteprojectsmitigate.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `src`                                                                                                      | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |