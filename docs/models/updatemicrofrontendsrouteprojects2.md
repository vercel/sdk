# UpdateMicrofrontendsRouteProjects2

## Example Usage

```typescript
import { UpdateMicrofrontendsRouteProjects2 } from "@vercel/sdk/models/updatemicrofrontendscreatedeployments.js";

let value: UpdateMicrofrontendsRouteProjects2 = {
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
| `has`                                                                                                      | *models.UpdateMicrofrontendsRouteProjectsHas*[]                                                            | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `mitigate`                                                                                                 | [models.UpdateMicrofrontendsRouteProjectsMitigate](../models/updatemicrofrontendsrouteprojectsmitigate.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `src`                                                                                                      | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |