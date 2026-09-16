# BlockHistory3

## Example Usage

```typescript
import { BlockHistory3 } from "@vercel/sdk/models/createprojectcontenthint2.js";

let value: BlockHistory3 = {
  action: "route-blocked",
  createdAt: 120.75,
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

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `action`                   | *"route-blocked"*          | :heavy_check_mark:         | N/A                        |
| `actor`                    | *string*                   | :heavy_minus_sign:         | N/A                        |
| `caseId`                   | *string*                   | :heavy_minus_sign:         | N/A                        |
| `comment`                  | *string*                   | :heavy_minus_sign:         | N/A                        |
| `createdAt`                | *number*                   | :heavy_check_mark:         | N/A                        |
| `ineligibleForAppeal`      | *boolean*                  | :heavy_minus_sign:         | N/A                        |
| `isCascading`              | *boolean*                  | :heavy_minus_sign:         | N/A                        |
| `reason`                   | *string*                   | :heavy_check_mark:         | N/A                        |
| `route`                    | *models.BlockHistoryRoute* | :heavy_check_mark:         | N/A                        |