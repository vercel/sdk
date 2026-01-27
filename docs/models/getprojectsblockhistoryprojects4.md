# GetProjectsBlockHistoryProjects4

## Example Usage

```typescript
import { GetProjectsBlockHistoryProjects4 } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsBlockHistoryProjects4 = {
  action: "route-unblocked",
  route: {
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
  },
  createdAt: 8632.82,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `action`                                                 | *"route-unblocked"*                                      | :heavy_check_mark:                                       | N/A                                                      |
| `route`                                                  | *models.GetProjectsBlockHistoryProjectsResponse200Route* | :heavy_check_mark:                                       | N/A                                                      |
| `statusCode`                                             | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `createdAt`                                              | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `caseId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `actor`                                                  | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `comment`                                                | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `ineligibleForAppeal`                                    | *boolean*                                                | :heavy_minus_sign:                                       | N/A                                                      |
| `isCascading`                                            | *boolean*                                                | :heavy_minus_sign:                                       | N/A                                                      |