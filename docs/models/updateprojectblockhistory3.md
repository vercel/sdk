# UpdateProjectBlockHistory3

## Example Usage

```typescript
import { UpdateProjectBlockHistory3 } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectBlockHistory3 = {
  action: "route-blocked",
  route: {
    src: "<value>",
    status: 5377.98,
  },
  reason: "<value>",
  createdAt: 8650.96,
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `action`                                | *"route-blocked"*                       | :heavy_check_mark:                      | N/A                                     |
| `route`                                 | *models.UpdateProjectBlockHistoryRoute* | :heavy_check_mark:                      | N/A                                     |
| `reason`                                | *string*                                | :heavy_check_mark:                      | N/A                                     |
| `createdAt`                             | *number*                                | :heavy_check_mark:                      | N/A                                     |
| `caseId`                                | *string*                                | :heavy_minus_sign:                      | N/A                                     |
| `actor`                                 | *string*                                | :heavy_minus_sign:                      | N/A                                     |
| `comment`                               | *string*                                | :heavy_minus_sign:                      | N/A                                     |
| `ineligibleForAppeal`                   | *boolean*                               | :heavy_minus_sign:                      | N/A                                     |
| `isCascading`                           | *boolean*                               | :heavy_minus_sign:                      | N/A                                     |