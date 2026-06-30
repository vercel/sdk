# GetProjectBlockHistory4

## Example Usage

```typescript
import { GetProjectBlockHistory4 } from "@vercel/sdk/models/getprojectresponsebody.js";

let value: GetProjectBlockHistory4 = {
  action: "route-unblocked",
  route: {
    has: [],
    mitigate: {
      action: "block_legal_cwc",
    },
  },
  createdAt: 1146.31,
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `action`                                     | *"route-unblocked"*                          | :heavy_check_mark:                           | N/A                                          |
| `route`                                      | *models.GetProjectBlockHistoryProjectsRoute* | :heavy_check_mark:                           | N/A                                          |
| `statusCode`                                 | *number*                                     | :heavy_minus_sign:                           | N/A                                          |
| `createdAt`                                  | *number*                                     | :heavy_check_mark:                           | N/A                                          |
| `caseId`                                     | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `actor`                                      | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `comment`                                    | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `ineligibleForAppeal`                        | *boolean*                                    | :heavy_minus_sign:                           | N/A                                          |
| `isCascading`                                | *boolean*                                    | :heavy_minus_sign:                           | N/A                                          |