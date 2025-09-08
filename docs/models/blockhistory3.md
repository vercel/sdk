# BlockHistory3

## Example Usage

```typescript
import { BlockHistory3 } from "@vercel/sdk/models/updateprojectdatacacheop.js";

let value: BlockHistory3 = {
  action: "route-blocked",
  route: {
    src: "<value>",
    status: 8677.85,
  },
  reason: "<value>",
  createdAt: 8082.76,
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                                 | [models.UpdateProjectDataCacheBlockHistoryProjectsAction](../models/updateprojectdatacacheblockhistoryprojectsaction.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `route`                                                                                                                  | *models.Route*                                                                                                           | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `reason`                                                                                                                 | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `createdAt`                                                                                                              | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `caseId`                                                                                                                 | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `actor`                                                                                                                  | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `comment`                                                                                                                | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `isCascading`                                                                                                            | *boolean*                                                                                                                | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |