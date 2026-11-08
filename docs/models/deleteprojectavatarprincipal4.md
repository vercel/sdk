# DeleteProjectAvatarPrincipal4

The principal who rolled back the project. Absent on historical rollbacks where the principal was a user (in this case, see `userId`).

## Example Usage

```typescript
import { DeleteProjectAvatarPrincipal4 } from "@vercel/sdk/models/deleteprojectavatarfrom1.js";

let value: DeleteProjectAvatarPrincipal4 = {
  integration: {
    configurationId: "<id>",
    integrationId: "<id>",
  },
  type: "integration",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `integration`                                                                                          | [models.DeleteProjectAvatarPrincipalIntegration](../models/deleteprojectavatarprincipalintegration.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `type`                                                                                                 | *"integration"*                                                                                        | :heavy_check_mark:                                                                                     | N/A                                                                                                    |