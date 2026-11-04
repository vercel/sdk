# UpdateMicrofrontendsPrincipal1

The principal who rolled back the project. Absent on historical rollbacks where the principal was a user (in this case, see `userId`).

## Example Usage

```typescript
import { UpdateMicrofrontendsPrincipal1 } from "@vercel/sdk/models/updatemicrofrontendsfrom1.js";

let value: UpdateMicrofrontendsPrincipal1 = {
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

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `type`                                                                                     | *"user"*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `via`                                                                                      | *models.UpdateMicrofrontendsPrincipalVia*                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `user`                                                                                     | [models.UpdateMicrofrontendsPrincipalUser](../models/updatemicrofrontendsprincipaluser.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |