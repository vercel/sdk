# UserEventPrincipal3

The principal who rolled back the project. Absent on historical rollbacks where the principal was a user (in this case, see `userId`).

## Example Usage

```typescript
import { UserEventPrincipal3 } from "@vercel/sdk/models/threehundredandthirtyeight.js";

let value: UserEventPrincipal3 = {
  integration: {
    configurationId: "<id>",
    integrationId: "<id>",
  },
  type: "integration",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `integration`                                                    | [models.PrincipalIntegration](../models/principalintegration.md) | :heavy_check_mark:                                               | N/A                                                              |
| `type`                                                           | *"integration"*                                                  | :heavy_check_mark:                                               | N/A                                                              |