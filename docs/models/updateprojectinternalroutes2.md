# UpdateProjectInternalRoutes2

## Example Usage

```typescript
import { UpdateProjectInternalRoutes2 } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectInternalRoutes2 = {
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

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `has`                                                                                          | *models.UpdateProjectInternalRoutesHas*[]                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `mitigate`                                                                                     | [models.UpdateProjectInternalRoutesMitigate](../models/updateprojectinternalroutesmitigate.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `src`                                                                                          | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |