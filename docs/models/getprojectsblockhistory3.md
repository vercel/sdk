# GetProjectsBlockHistory3

## Example Usage

```typescript
import { GetProjectsBlockHistory3 } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsBlockHistory3 = {
  action: "route-blocked",
  route: {
    src: "<value>",
    status: 3830.55,
  },
  reason: "<value>",
  createdAt: 5491.52,
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `action`                              | *"route-blocked"*                     | :heavy_check_mark:                    | N/A                                   |
| `route`                               | *models.GetProjectsBlockHistoryRoute* | :heavy_check_mark:                    | N/A                                   |
| `reason`                              | *string*                              | :heavy_check_mark:                    | N/A                                   |
| `createdAt`                           | *number*                              | :heavy_check_mark:                    | N/A                                   |
| `caseId`                              | *string*                              | :heavy_minus_sign:                    | N/A                                   |
| `actor`                               | *string*                              | :heavy_minus_sign:                    | N/A                                   |
| `comment`                             | *string*                              | :heavy_minus_sign:                    | N/A                                   |
| `isCascading`                         | *boolean*                             | :heavy_minus_sign:                    | N/A                                   |