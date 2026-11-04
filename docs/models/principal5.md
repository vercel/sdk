# Principal5

The principal who rolled back the project. Absent on historical rollbacks where the principal was a user (in this case, see `userId`).

## Example Usage

```typescript
import { Principal5 } from "@vercel/sdk/models/threehundredandthirtyeight.js";

let value: Principal5 = {
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

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `type`                                             | *"user"*                                           | :heavy_check_mark:                                 | N/A                                                |
| `via`                                              | *models.PrincipalVia*                              | :heavy_check_mark:                                 | N/A                                                |
| `user`                                             | [models.PrincipalUser](../models/principaluser.md) | :heavy_check_mark:                                 | N/A                                                |