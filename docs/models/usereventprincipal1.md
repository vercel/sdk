# UserEventPrincipal1

The principal who rolled back the project. Absent on historical rollbacks where the principal was a user (in this case, see `userId`).

## Example Usage

```typescript
import { UserEventPrincipal1 } from "@vercel/sdk/models/payloadcurrent.js";

let value: UserEventPrincipal1 = {
  project: {
    id: "<id>",
  },
  type: "project",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `project`                                                | [models.PrincipalProject](../models/principalproject.md) | :heavy_check_mark:                                       | N/A                                                      |
| `type`                                                   | *"project"*                                              | :heavy_check_mark:                                       | N/A                                                      |