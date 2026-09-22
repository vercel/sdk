# UploadProjectAvatarCreator1

## Example Usage

```typescript
import { UploadProjectAvatarCreator1 } from "@vercel/sdk/models/uploadprojectavatarhas2.js";

let value: UploadProjectAvatarCreator1 = {
  type: "user",
  via: {
    app: {
      id: "<id>",
    },
    type: "app",
  },
  user: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `type`                                                                               | *"user"*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `via`                                                                                | *models.UploadProjectAvatarCreatorVia*                                               | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `user`                                                                               | [models.UploadProjectAvatarCreatorUser](../models/uploadprojectavatarcreatoruser.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |