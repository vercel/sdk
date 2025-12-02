# UpdateProjectBlockHistory4

## Example Usage

```typescript
import { UpdateProjectBlockHistory4 } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectBlockHistory4 = {
  action: "route-unblocked",
  route: {
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
  },
  createdAt: 207.55,
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `action`                                        | *"route-unblocked"*                             | :heavy_check_mark:                              | N/A                                             |
| `route`                                         | *models.UpdateProjectBlockHistoryProjectsRoute* | :heavy_check_mark:                              | N/A                                             |
| `statusCode`                                    | *number*                                        | :heavy_minus_sign:                              | N/A                                             |
| `createdAt`                                     | *number*                                        | :heavy_check_mark:                              | N/A                                             |
| `caseId`                                        | *string*                                        | :heavy_minus_sign:                              | N/A                                             |
| `actor`                                         | *string*                                        | :heavy_minus_sign:                              | N/A                                             |
| `comment`                                       | *string*                                        | :heavy_minus_sign:                              | N/A                                             |
| `isCascading`                                   | *boolean*                                       | :heavy_minus_sign:                              | N/A                                             |