# UploadProjectAvatarPrincipal1

The principal who rolled back the project. Absent on historical rollbacks where the principal was a user (in this case, see `userId`).

## Example Usage

```typescript
import { UploadProjectAvatarPrincipal1 } from "@vercel/sdk/models/uploadprojectavatarfrom.js";

let value: UploadProjectAvatarPrincipal1 = {
  type: "user",
  via: {
    integration: {
      configurationId: "<id>",
      integrationId: "<id>",
    },
    type: "integration",
  },
  user: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `type`                                                                                   | *"user"*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `via`                                                                                    | *models.UploadProjectAvatarPrincipalVia*                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `user`                                                                                   | [models.UploadProjectAvatarPrincipalUser](../models/uploadprojectavatarprincipaluser.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |