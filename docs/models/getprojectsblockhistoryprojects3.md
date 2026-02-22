# GetProjectsBlockHistoryProjects3

## Example Usage

```typescript
import { GetProjectsBlockHistoryProjects3 } from "@vercel/sdk/models/getprojectsblockhistoryprojects3.js";

let value: GetProjectsBlockHistoryProjects3 = {
  action: "route-blocked",
  route: {
    src: "<value>",
    status: 5533.57,
  },
  reason: "<value>",
  createdAt: 2165.59,
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `action`                                              | *"route-blocked"*                                     | :heavy_check_mark:                                    | N/A                                                   |
| `route`                                               | *models.GetProjectsBlockHistoryProjectsResponseRoute* | :heavy_check_mark:                                    | N/A                                                   |
| `reason`                                              | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `createdAt`                                           | *number*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `caseId`                                              | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `actor`                                               | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `comment`                                             | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `ineligibleForAppeal`                                 | *boolean*                                             | :heavy_minus_sign:                                    | N/A                                                   |
| `isCascading`                                         | *boolean*                                             | :heavy_minus_sign:                                    | N/A                                                   |