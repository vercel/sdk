# GetMicrofrontendsInGroupBlockHistory3

## Example Usage

```typescript
import { GetMicrofrontendsInGroupBlockHistory3 } from "@vercel/sdk/models/getmicrofrontendsingrouphas2.js";

let value: GetMicrofrontendsInGroupBlockHistory3 = {
  action: "route-blocked",
  createdAt: 8762.56,
  reason: "<value>",
  route: {
    has: [
      {
        type: "host",
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

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `action`                                           | *"route-blocked"*                                  | :heavy_check_mark:                                 | N/A                                                |
| `actor`                                            | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `caseId`                                           | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `comment`                                          | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `createdAt`                                        | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `ineligibleForAppeal`                              | *boolean*                                          | :heavy_minus_sign:                                 | N/A                                                |
| `isCascading`                                      | *boolean*                                          | :heavy_minus_sign:                                 | N/A                                                |
| `reason`                                           | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `route`                                            | *models.GetMicrofrontendsInGroupBlockHistoryRoute* | :heavy_check_mark:                                 | N/A                                                |