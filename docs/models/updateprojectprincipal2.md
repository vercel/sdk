# UpdateProjectPrincipal2

The principal who rolled back the project. Absent on historical rollbacks where the principal was a user (in this case, see `userId`).

## Example Usage

```typescript
import { UpdateProjectPrincipal2 } from "@vercel/sdk/models/updateprojectprincipalvia.js";

let value: UpdateProjectPrincipal2 = {
  project: {
    id: "<id>",
  },
  type: "project",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `project`                                                                          | [models.UpdateProjectPrincipalProject](../models/updateprojectprincipalproject.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `type`                                                                             | *"project"*                                                                        | :heavy_check_mark:                                                                 | N/A                                                                                |