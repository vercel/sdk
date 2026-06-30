# UploadProjectAvatarExpiration2

## Example Usage

```typescript
import { UploadProjectAvatarExpiration2 } from "@vercel/sdk/models/uploadprojectavatarprojectsresponse200applicationjsontype.js";

let value: UploadProjectAvatarExpiration2 = {
  lockedAt: 2103.01,
  lockedBy: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `lockedAt`                                                     | *number*                                                       | :heavy_check_mark:                                             | Unix ms timestamp when the project was locked.                 |
| `lockedBy`                                                     | *string*                                                       | :heavy_check_mark:                                             | userId of the actor that triggered the lock (system or admin). |