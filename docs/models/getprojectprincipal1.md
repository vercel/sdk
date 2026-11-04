# GetProjectPrincipal1

The principal who rolled back the project. Absent on historical rollbacks where the principal was a user (in this case, see `userId`).

## Example Usage

```typescript
import { GetProjectPrincipal1 } from "@vercel/sdk/models/getprojectfrompreset.js";

let value: GetProjectPrincipal1 = {
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

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `type`                                                                 | *"user"*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `via`                                                                  | *models.GetProjectPrincipalVia*                                        | :heavy_check_mark:                                                     | N/A                                                                    |
| `user`                                                                 | [models.GetProjectPrincipalUser](../models/getprojectprincipaluser.md) | :heavy_check_mark:                                                     | N/A                                                                    |