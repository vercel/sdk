# UploadProjectAvatarExpiration2

## Example Usage

```typescript
import { UploadProjectAvatarExpiration2 } from "@vercel/sdk/models/uploadprojectavatarchecksstate.js";

let value: UploadProjectAvatarExpiration2 = {
  lockedAt: 2103.01,
  lockedBy: "<value>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `lockedAt`                                                                | *number*                                                                  | :heavy_check_mark:                                                        | Unix ms timestamp when the project was locked.                            |
| `lockedBy`                                                                | *string*                                                                  | :heavy_check_mark:                                                        | ID of the user, app, or integration that locked the project, or `system`. |