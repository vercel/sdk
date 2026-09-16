# UpdateProjectBlockHistory3

## Example Usage

```typescript
import { UpdateProjectBlockHistory3 } from "@vercel/sdk/models/updateprojectdefinitions.js";

let value: UpdateProjectBlockHistory3 = {
  action: "route-blocked",
  createdAt: 2767.46,
  reason: "<value>",
  route: {
    has: [
      {
        key: "x-vercel-ip-country",
        type: "header",
        value: {
          eq: "<value>",
        },
      },
    ],
    mitigate: {
      action: "block_legal_cwc",
    },
  },
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `action`                                | *"route-blocked"*                       | :heavy_check_mark:                      | N/A                                     |
| `actor`                                 | *string*                                | :heavy_minus_sign:                      | N/A                                     |
| `caseId`                                | *string*                                | :heavy_minus_sign:                      | N/A                                     |
| `comment`                               | *string*                                | :heavy_minus_sign:                      | N/A                                     |
| `createdAt`                             | *number*                                | :heavy_check_mark:                      | N/A                                     |
| `ineligibleForAppeal`                   | *boolean*                               | :heavy_minus_sign:                      | N/A                                     |
| `isCascading`                           | *boolean*                               | :heavy_minus_sign:                      | N/A                                     |
| `reason`                                | *string*                                | :heavy_check_mark:                      | N/A                                     |
| `route`                                 | *models.UpdateProjectBlockHistoryRoute* | :heavy_check_mark:                      | N/A                                     |