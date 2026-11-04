# GetMicrofrontendsInGroupPrincipal2

The principal who rolled back the project. Absent on historical rollbacks where the principal was a user (in this case, see `userId`).

## Example Usage

```typescript
import { GetMicrofrontendsInGroupPrincipal2 } from "@vercel/sdk/models/getmicrofrontendsingroupfrom1.js";

let value: GetMicrofrontendsInGroupPrincipal2 = {
  project: {
    id: "<id>",
  },
  type: "project",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `project`                                                                                                | [models.GetMicrofrontendsInGroupPrincipalProject](../models/getmicrofrontendsingroupprincipalproject.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `type`                                                                                                   | *"project"*                                                                                              | :heavy_check_mark:                                                                                       | N/A                                                                                                      |