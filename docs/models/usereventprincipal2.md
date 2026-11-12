# UserEventPrincipal2

The principal who rolled back the project. Absent on historical rollbacks where the principal was a user (in this case, see `userId`).

## Example Usage

```typescript
import { UserEventPrincipal2 } from "@vercel/sdk/models/usereventpayloadprivatelinkendpoint.js";

let value: UserEventPrincipal2 = {
  app: {
    id: "<id>",
  },
  type: "app",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `app`                                            | [models.PrincipalApp](../models/principalapp.md) | :heavy_check_mark:                               | N/A                                              |
| `type`                                           | *"app"*                                          | :heavy_check_mark:                               | N/A                                              |