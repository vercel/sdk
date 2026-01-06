# GetProjectsInternalRoutesProjects2

## Example Usage

```typescript
import { GetProjectsInternalRoutesProjects2 } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsInternalRoutesProjects2 = {
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

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `has`                                                                                                                      | *models.GetProjectsInternalRoutesProjectsResponseHas*[]                                                                    | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `mitigate`                                                                                                                 | [models.GetProjectsInternalRoutesProjectsResponseMitigate](../models/getprojectsinternalroutesprojectsresponsemitigate.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `src`                                                                                                                      | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |