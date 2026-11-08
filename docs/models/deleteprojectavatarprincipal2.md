# DeleteProjectAvatarPrincipal2

The principal who rolled back the project. Absent on historical rollbacks where the principal was a user (in this case, see `userId`).

## Example Usage

```typescript
import { DeleteProjectAvatarPrincipal2 } from "@vercel/sdk/models/deleteprojectavatarfrom1.js";

let value: DeleteProjectAvatarPrincipal2 = {
  project: {
    id: "<id>",
  },
  type: "project",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `project`                                                                                      | [models.DeleteProjectAvatarPrincipalProject](../models/deleteprojectavatarprincipalproject.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `type`                                                                                         | *"project"*                                                                                    | :heavy_check_mark:                                                                             | N/A                                                                                            |