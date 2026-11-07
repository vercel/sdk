# DeleteProjectAvatarPrincipal1

The principal who rolled back the project. Absent on historical rollbacks where the principal was a user (in this case, see `userId`).

## Example Usage

```typescript
import { DeleteProjectAvatarPrincipal1 } from "@vercel/sdk/models/deleteprojectavatarfrom1.js";

let value: DeleteProjectAvatarPrincipal1 = {
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
| `via`                                                                                    | *models.DeleteProjectAvatarPrincipalVia*                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `user`                                                                                   | [models.DeleteProjectAvatarPrincipalUser](../models/deleteprojectavatarprincipaluser.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |