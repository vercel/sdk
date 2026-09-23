# GetProjectBlockHistory3

## Example Usage

```typescript
import { GetProjectBlockHistory3 } from "@vercel/sdk/models/getprojectgitprovideroptions.js";

let value: GetProjectBlockHistory3 = {
  action: "route-blocked",
  createdAt: 5947.11,
  reason: "<value>",
  route: {
    src: "<value>",
    status: 970.47,
  },
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `action`                             | *"route-blocked"*                    | :heavy_check_mark:                   | N/A                                  |
| `actor`                              | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `caseId`                             | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `comment`                            | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `createdAt`                          | *number*                             | :heavy_check_mark:                   | N/A                                  |
| `ineligibleForAppeal`                | *boolean*                            | :heavy_minus_sign:                   | N/A                                  |
| `isCascading`                        | *boolean*                            | :heavy_minus_sign:                   | N/A                                  |
| `reason`                             | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `route`                              | *models.GetProjectBlockHistoryRoute* | :heavy_check_mark:                   | N/A                                  |