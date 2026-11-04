# UploadProjectAvatarPrincipal3

The principal who rolled back the project. Absent on historical rollbacks where the principal was a user (in this case, see `userId`).

## Example Usage

```typescript
import { UploadProjectAvatarPrincipal3 } from "@vercel/sdk/models/uploadprojectavatarfrom.js";

let value: UploadProjectAvatarPrincipal3 = {
  app: {
    id: "<id>",
  },
  type: "app",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `app`                                                                                  | [models.UploadProjectAvatarPrincipalApp](../models/uploadprojectavatarprincipalapp.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `type`                                                                                 | *"app"*                                                                                | :heavy_check_mark:                                                                     | N/A                                                                                    |