# GetProjectsBlockHistoryProjectsResponse3

## Example Usage

```typescript
import { GetProjectsBlockHistoryProjectsResponse3 } from "@vercel/sdk/models/getprojectsresponsebodyprojectsconsolidatedgitcommitstatus.js";

let value: GetProjectsBlockHistoryProjectsResponse3 = {
  action: "route-blocked",
  createdAt: 8374.41,
  reason: "<value>",
  route: {
    has: [],
    mitigate: {
      action: "block_legal_cwc",
    },
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `action`                                                                | *"route-blocked"*                                                       | :heavy_check_mark:                                                      | N/A                                                                     |
| `actor`                                                                 | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `caseId`                                                                | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `comment`                                                               | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `createdAt`                                                             | *number*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `ineligibleForAppeal`                                                   | *boolean*                                                               | :heavy_minus_sign:                                                      | N/A                                                                     |
| `isCascading`                                                           | *boolean*                                                               | :heavy_minus_sign:                                                      | N/A                                                                     |
| `reason`                                                                | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `route`                                                                 | *models.GetProjectsBlockHistoryProjectsResponse200ApplicationJSONRoute* | :heavy_check_mark:                                                      | N/A                                                                     |