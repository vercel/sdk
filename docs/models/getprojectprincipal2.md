# GetProjectPrincipal2

The principal who rolled back the project. Absent on historical rollbacks where the principal was a user (in this case, see `userId`).

## Example Usage

```typescript
import { GetProjectPrincipal2 } from "@vercel/sdk/models/getprojectfrom2.js";

let value: GetProjectPrincipal2 = {
  project: {
    id: "<id>",
  },
  type: "project",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.GetProjectPrincipalProject](../models/getprojectprincipalproject.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `type`                                                                       | *"project"*                                                                  | :heavy_check_mark:                                                           | N/A                                                                          |