# UpdateMicrofrontendsPrincipal4

The principal who rolled back the project. Absent on historical rollbacks where the principal was a user (in this case, see `userId`).

## Example Usage

```typescript
import { UpdateMicrofrontendsPrincipal4 } from "@vercel/sdk/models/updatemicrofrontendsfrompreset.js";

let value: UpdateMicrofrontendsPrincipal4 = {
  integration: {
    configurationId: "<id>",
    integrationId: "<id>",
  },
  type: "integration",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `integration`                                                                                            | [models.UpdateMicrofrontendsPrincipalIntegration](../models/updatemicrofrontendsprincipalintegration.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `type`                                                                                                   | *"integration"*                                                                                          | :heavy_check_mark:                                                                                       | N/A                                                                                                      |