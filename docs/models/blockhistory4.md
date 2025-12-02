# BlockHistory4

## Example Usage

```typescript
import { BlockHistory4 } from "@vercel/sdk/models/updateprojectdatacacheop.js";

let value: BlockHistory4 = {
  action: "route-unblocked",
  route: {
    has: [],
    mitigate: {
      action: "block_legal_cwc",
    },
  },
  createdAt: 1752.63,
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `action`                   | *"route-unblocked"*        | :heavy_check_mark:         | N/A                        |
| `route`                    | *models.BlockHistoryRoute* | :heavy_check_mark:         | N/A                        |
| `statusCode`               | *number*                   | :heavy_minus_sign:         | N/A                        |
| `createdAt`                | *number*                   | :heavy_check_mark:         | N/A                        |
| `caseId`                   | *string*                   | :heavy_minus_sign:         | N/A                        |
| `actor`                    | *string*                   | :heavy_minus_sign:         | N/A                        |
| `comment`                  | *string*                   | :heavy_minus_sign:         | N/A                        |
| `isCascading`              | *boolean*                  | :heavy_minus_sign:         | N/A                        |