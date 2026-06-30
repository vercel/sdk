# GetProjectBlockHistory3

## Example Usage

```typescript
import { GetProjectBlockHistory3 } from "@vercel/sdk/models/getprojectresponsebody.js";

let value: GetProjectBlockHistory3 = {
  action: "route-blocked",
  route: {
    has: [],
    mitigate: {
      action: "block_legal_cwc",
    },
  },
  reason: "<value>",
  createdAt: 970.47,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `action`                             | *"route-blocked"*                    | :heavy_check_mark:                   | N/A                                  |
| `route`                              | *models.GetProjectBlockHistoryRoute* | :heavy_check_mark:                   | N/A                                  |
| `reason`                             | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `createdAt`                          | *number*                             | :heavy_check_mark:                   | N/A                                  |
| `caseId`                             | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `actor`                              | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `comment`                            | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `ineligibleForAppeal`                | *boolean*                            | :heavy_minus_sign:                   | N/A                                  |
| `isCascading`                        | *boolean*                            | :heavy_minus_sign:                   | N/A                                  |