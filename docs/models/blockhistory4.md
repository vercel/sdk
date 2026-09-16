# BlockHistory4

## Example Usage

```typescript
import { BlockHistory4 } from "@vercel/sdk/models/createprojectcontenthint2.js";

let value: BlockHistory4 = {
  action: "route-unblocked",
  createdAt: 6252.8,
  route: {
    src: "<value>",
    status: 1752.63,
  },
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `action`                                | *"route-unblocked"*                     | :heavy_check_mark:                      | N/A                                     |
| `actor`                                 | *string*                                | :heavy_minus_sign:                      | N/A                                     |
| `caseId`                                | *string*                                | :heavy_minus_sign:                      | N/A                                     |
| `comment`                               | *string*                                | :heavy_minus_sign:                      | N/A                                     |
| `createdAt`                             | *number*                                | :heavy_check_mark:                      | N/A                                     |
| `ineligibleForAppeal`                   | *boolean*                               | :heavy_minus_sign:                      | N/A                                     |
| `isCascading`                           | *boolean*                               | :heavy_minus_sign:                      | N/A                                     |
| `route`                                 | *models.CreateProjectBlockHistoryRoute* | :heavy_check_mark:                      | N/A                                     |
| `statusCode`                            | *number*                                | :heavy_minus_sign:                      | N/A                                     |