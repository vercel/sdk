# UploadProjectAvatarBlockHistory4

## Example Usage

```typescript
import { UploadProjectAvatarBlockHistory4 } from "@vercel/sdk/models/uploadprojectavatartracing.js";

let value: UploadProjectAvatarBlockHistory4 = {
  action: "route-unblocked",
  route: {
    src: "<value>",
    status: 172.55,
  },
  createdAt: 6918.47,
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `action`                                              | *"route-unblocked"*                                   | :heavy_check_mark:                                    | N/A                                                   |
| `route`                                               | *models.UploadProjectAvatarBlockHistoryProjectsRoute* | :heavy_check_mark:                                    | N/A                                                   |
| `statusCode`                                          | *number*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `createdAt`                                           | *number*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `caseId`                                              | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `actor`                                               | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `comment`                                             | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `ineligibleForAppeal`                                 | *boolean*                                             | :heavy_minus_sign:                                    | N/A                                                   |
| `isCascading`                                         | *boolean*                                             | :heavy_minus_sign:                                    | N/A                                                   |