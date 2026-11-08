# CreateProjectPrincipal3

The principal who rolled back the project. Absent on historical rollbacks where the principal was a user (in this case, see `userId`).

## Example Usage

```typescript
import { CreateProjectPrincipal3 } from "@vercel/sdk/models/createprojectprojectsoidctokenclaims.js";

let value: CreateProjectPrincipal3 = {
  app: {
    id: "<id>",
  },
  type: "app",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `app`                                                                      | [models.CreateProjectPrincipalApp](../models/createprojectprincipalapp.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `type`                                                                     | *"app"*                                                                    | :heavy_check_mark:                                                         | N/A                                                                        |