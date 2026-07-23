# UploadProjectAvatarBlock

## Example Usage

```typescript
import { UploadProjectAvatarBlock } from "@vercel/sdk/models/uploadprojectavatartracing.js";

let value: UploadProjectAvatarBlock = {
  action: "blocked",
  reason: "<value>",
  statusCode: 5966.61,
  createdAt: 6122.18,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `action`                                                                                   | [models.UploadProjectAvatarProjectsAction](../models/uploadprojectavatarprojectsaction.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `reason`                                                                                   | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `statusCode`                                                                               | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `createdAt`                                                                                | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `caseId`                                                                                   | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `actor`                                                                                    | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `comment`                                                                                  | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `ineligibleForAppeal`                                                                      | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `isCascading`                                                                              | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | N/A                                                                                        |