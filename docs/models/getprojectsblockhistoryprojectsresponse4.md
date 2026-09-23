# GetProjectsBlockHistoryProjectsResponse4

## Example Usage

```typescript
import { GetProjectsBlockHistoryProjectsResponse4 } from "@vercel/sdk/models/responsebodyexpiration.js";

let value: GetProjectsBlockHistoryProjectsResponse4 = {
  action: "route-unblocked",
  createdAt: 5326.03,
  route: {
    has: [],
    mitigate: {
      action: "block_legal_cwc",
    },
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `action`                                                                            | *"route-unblocked"*                                                                 | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `actor`                                                                             | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `caseId`                                                                            | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `comment`                                                                           | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `createdAt`                                                                         | *number*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `ineligibleForAppeal`                                                               | *boolean*                                                                           | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `isCascading`                                                                       | *boolean*                                                                           | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `route`                                                                             | *models.GetProjectsBlockHistoryProjectsResponse200ApplicationJSONResponseBodyRoute* | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `statusCode`                                                                        | *number*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |