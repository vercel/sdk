# GetMicrofrontendsInGroupBlockHistory4

## Example Usage

```typescript
import { GetMicrofrontendsInGroupBlockHistory4 } from "@vercel/sdk/models/getmicrofrontendsingroupgitprovideroptions.js";

let value: GetMicrofrontendsInGroupBlockHistory4 = {
  action: "route-unblocked",
  createdAt: 3199.53,
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

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `abuseAgentRunId`                                                                                                                             | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Since October 2026. The abuse agent run whose verdict led to this block. Absent on blocks made before the field existed, even agent-led ones. |
| `action`                                                                                                                                      | *"route-unblocked"*                                                                                                                           | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |
| `actor`                                                                                                                                       | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           |
| `caseId`                                                                                                                                      | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           |
| `comment`                                                                                                                                     | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           |
| `createdAt`                                                                                                                                   | *number*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |
| `ineligibleForAppeal`                                                                                                                         | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           |
| `isCascading`                                                                                                                                 | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           |
| `route`                                                                                                                                       | *models.GetMicrofrontendsInGroupBlockHistoryMicrofrontendsRoute*                                                                              | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |
| `statusCode`                                                                                                                                  | *number*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           |
| `threadId`                                                                                                                                    | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Plain thread ID, recorded separately from `caseId`.                                                                                           |