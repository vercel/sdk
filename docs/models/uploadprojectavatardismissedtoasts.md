# UploadProjectAvatarDismissedToasts

## Example Usage

```typescript
import { UploadProjectAvatarDismissedToasts } from "@vercel/sdk/models/uploadprojectavatarresponsebody.js";

let value: UploadProjectAvatarDismissedToasts = {
  key: "<key>",
  dismissedAt: 293.27,
  action: "delete",
  value: true,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `key`                                                                      | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `dismissedAt`                                                              | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `action`                                                                   | [models.UploadProjectAvatarAction](../models/uploadprojectavataraction.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `value`                                                                    | *models.UploadProjectAvatarValue*                                          | :heavy_check_mark:                                                         | N/A                                                                        |