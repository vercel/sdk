# GetProjectsPrincipal4

The principal who rolled back the project. Absent on historical rollbacks where the principal was a user (in this case, see `userId`).

## Example Usage

```typescript
import { GetProjectsPrincipal4 } from "@vercel/sdk/models/getprojectstoprojectsresponse2001.js";

let value: GetProjectsPrincipal4 = {
  integration: {
    configurationId: "<id>",
    integrationId: "<id>",
  },
  type: "integration",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `integration`                                                                          | [models.GetProjectsPrincipalIntegration](../models/getprojectsprincipalintegration.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `type`                                                                                 | *"integration"*                                                                        | :heavy_check_mark:                                                                     | N/A                                                                                    |