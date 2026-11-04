# UploadProjectAvatarPrincipal2

The principal who rolled back the project. Absent on historical rollbacks where the principal was a user (in this case, see `userId`).

## Example Usage

```typescript
import { UploadProjectAvatarPrincipal2 } from "@vercel/sdk/models/uploadprojectavatarfrom.js";

let value: UploadProjectAvatarPrincipal2 = {
  project: {
    id: "<id>",
  },
  type: "project",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `project`                                                                                      | [models.UploadProjectAvatarPrincipalProject](../models/uploadprojectavatarprincipalproject.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `type`                                                                                         | *"project"*                                                                                    | :heavy_check_mark:                                                                             | N/A                                                                                            |