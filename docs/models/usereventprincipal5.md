# UserEventPrincipal5

The principal who rolled back the project. Absent on historical rollbacks where the principal was a user (in this case, see `userId`).

## Example Usage

```typescript
import { UserEventPrincipal5 } from "@vercel/sdk/models/principalintegration.js";

let value: UserEventPrincipal5 = {
  type: "user",
  via: {
    app: {
      id: "<id>",
    },
    type: "app",
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