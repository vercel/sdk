# GetMicrofrontendsInGroupPrincipal3

The principal who rolled back the project. Absent on historical rollbacks where the principal was a user (in this case, see `userId`).

## Example Usage

```typescript
import { GetMicrofrontendsInGroupPrincipal3 } from "@vercel/sdk/models/getmicrofrontendsingroupfrom1.js";

let value: GetMicrofrontendsInGroupPrincipal3 = {
  app: {
    id: "<id>",
  },
  type: "app",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `app`                                                                                            | [models.GetMicrofrontendsInGroupPrincipalApp](../models/getmicrofrontendsingroupprincipalapp.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `type`                                                                                           | *"app"*                                                                                          | :heavy_check_mark:                                                                               | N/A                                                                                              |