# GetProjectsBlockHistory3

## Example Usage

```typescript
import { GetProjectsBlockHistory3 } from "@vercel/sdk/models/responsebodyblockhistory.js";

let value: GetProjectsBlockHistory3 = {
  action: "route-blocked",
  createdAt: 3558.85,
  reason: "<value>",
  route: {
    src: "<value>",
    status: 5491.52,
  },
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `action`                              | *"route-blocked"*                     | :heavy_check_mark:                    | N/A                                   |
| `actor`                               | *string*                              | :heavy_minus_sign:                    | N/A                                   |
| `caseId`                              | *string*                              | :heavy_minus_sign:                    | N/A                                   |
| `comment`                             | *string*                              | :heavy_minus_sign:                    | N/A                                   |
| `createdAt`                           | *number*                              | :heavy_check_mark:                    | N/A                                   |
| `ineligibleForAppeal`                 | *boolean*                             | :heavy_minus_sign:                    | N/A                                   |
| `isCascading`                         | *boolean*                             | :heavy_minus_sign:                    | N/A                                   |
| `reason`                              | *string*                              | :heavy_check_mark:                    | N/A                                   |
| `route`                               | *models.GetProjectsBlockHistoryRoute* | :heavy_check_mark:                    | N/A                                   |