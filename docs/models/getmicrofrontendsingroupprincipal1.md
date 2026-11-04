# GetMicrofrontendsInGroupPrincipal1

The principal who rolled back the project. Absent on historical rollbacks where the principal was a user (in this case, see `userId`).

## Example Usage

```typescript
import { GetMicrofrontendsInGroupPrincipal1 } from "@vercel/sdk/models/getmicrofrontendsingroupfrom1.js";

let value: GetMicrofrontendsInGroupPrincipal1 = {
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

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | *"user"*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `via`                                                                                              | *models.GetMicrofrontendsInGroupPrincipalVia*                                                      | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `user`                                                                                             | [models.GetMicrofrontendsInGroupPrincipalUser](../models/getmicrofrontendsingroupprincipaluser.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |