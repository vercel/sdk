# UpdateMicrofrontendsPrincipal2

The principal who rolled back the project. Absent on historical rollbacks where the principal was a user (in this case, see `userId`).

## Example Usage

```typescript
import { UpdateMicrofrontendsPrincipal2 } from "@vercel/sdk/models/updatemicrofrontendsfrompreset.js";

let value: UpdateMicrofrontendsPrincipal2 = {
  project: {
    id: "<id>",
  },
  type: "project",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `project`                                                                                        | [models.UpdateMicrofrontendsPrincipalProject](../models/updatemicrofrontendsprincipalproject.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `type`                                                                                           | *"project"*                                                                                      | :heavy_check_mark:                                                                               | N/A                                                                                              |