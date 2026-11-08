# GetProjectsPrincipal1

The principal who rolled back the project. Absent on historical rollbacks where the principal was a user (in this case, see `userId`).

## Example Usage

```typescript
import { GetProjectsPrincipal1 } from "@vercel/sdk/models/getprojectstoprojectsresponse2001.js";

let value: GetProjectsPrincipal1 = {
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

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `type`                                                                   | *"user"*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `via`                                                                    | *models.GetProjectsPrincipalVia*                                         | :heavy_check_mark:                                                       | N/A                                                                      |
| `user`                                                                   | [models.GetProjectsPrincipalUser](../models/getprojectsprincipaluser.md) | :heavy_check_mark:                                                       | N/A                                                                      |