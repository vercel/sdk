# CreateProjectPrincipal1

The principal who rolled back the project. Absent on historical rollbacks where the principal was a user (in this case, see `userId`).

## Example Usage

```typescript
import { CreateProjectPrincipal1 } from "@vercel/sdk/models/createprojectprojectsoidctokenclaims.js";

let value: CreateProjectPrincipal1 = {
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

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `type`                                                                       | *"user"*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `via`                                                                        | *models.CreateProjectPrincipalVia*                                           | :heavy_check_mark:                                                           | N/A                                                                          |
| `user`                                                                       | [models.CreateProjectPrincipalUser](../models/createprojectprincipaluser.md) | :heavy_check_mark:                                                           | N/A                                                                          |