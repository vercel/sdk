# UploadProjectAvatarBlockHistory3

## Example Usage

```typescript
import { UploadProjectAvatarBlockHistory3 } from "@vercel/sdk/models/uploadprojectavatarresponsebody.js";

let value: UploadProjectAvatarBlockHistory3 = {
  action: "route-blocked",
  route: {
    has: [
      {
        type: "header",
        key: "x-vercel-ip-country",
        value: {
          eq: "<value>",
        },
      },
    ],
    mitigate: {
      action: "block_legal_cwc",
    },
  },
  reason: "<value>",
  createdAt: 1981.14,
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `action`                                      | *"route-blocked"*                             | :heavy_check_mark:                            | N/A                                           |
| `route`                                       | *models.UploadProjectAvatarBlockHistoryRoute* | :heavy_check_mark:                            | N/A                                           |
| `reason`                                      | *string*                                      | :heavy_check_mark:                            | N/A                                           |
| `createdAt`                                   | *number*                                      | :heavy_check_mark:                            | N/A                                           |
| `caseId`                                      | *string*                                      | :heavy_minus_sign:                            | N/A                                           |
| `actor`                                       | *string*                                      | :heavy_minus_sign:                            | N/A                                           |
| `comment`                                     | *string*                                      | :heavy_minus_sign:                            | N/A                                           |
| `ineligibleForAppeal`                         | *boolean*                                     | :heavy_minus_sign:                            | N/A                                           |
| `isCascading`                                 | *boolean*                                     | :heavy_minus_sign:                            | N/A                                           |