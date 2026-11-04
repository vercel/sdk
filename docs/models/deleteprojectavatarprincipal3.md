# DeleteProjectAvatarPrincipal3

The principal who rolled back the project. Absent on historical rollbacks where the principal was a user (in this case, see `userId`).

## Example Usage

```typescript
import { DeleteProjectAvatarPrincipal3 } from "@vercel/sdk/models/deleteprojectavatarfrom.js";

let value: DeleteProjectAvatarPrincipal3 = {
  app: {
    id: "<id>",
  },
  type: "app",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `app`                                                                                  | [models.DeleteProjectAvatarPrincipalApp](../models/deleteprojectavatarprincipalapp.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `type`                                                                                 | *"app"*                                                                                | :heavy_check_mark:                                                                     | N/A                                                                                    |