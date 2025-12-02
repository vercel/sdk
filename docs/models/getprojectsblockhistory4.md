# GetProjectsBlockHistory4

## Example Usage

```typescript
import { GetProjectsBlockHistory4 } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsBlockHistory4 = {
  action: "route-unblocked",
  route: {
    src: "<value>",
    status: 8911.94,
  },
  createdAt: 3845.17,
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `action`                                      | *"route-unblocked"*                           | :heavy_check_mark:                            | N/A                                           |
| `route`                                       | *models.GetProjectsBlockHistoryProjectsRoute* | :heavy_check_mark:                            | N/A                                           |
| `statusCode`                                  | *number*                                      | :heavy_minus_sign:                            | N/A                                           |
| `createdAt`                                   | *number*                                      | :heavy_check_mark:                            | N/A                                           |
| `caseId`                                      | *string*                                      | :heavy_minus_sign:                            | N/A                                           |
| `actor`                                       | *string*                                      | :heavy_minus_sign:                            | N/A                                           |
| `comment`                                     | *string*                                      | :heavy_minus_sign:                            | N/A                                           |
| `isCascading`                                 | *boolean*                                     | :heavy_minus_sign:                            | N/A                                           |