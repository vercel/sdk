# UpdateProjectPrincipal4

The principal who rolled back the project. Absent on historical rollbacks where the principal was a user (in this case, see `userId`).

## Example Usage

```typescript
import { UpdateProjectPrincipal4 } from "@vercel/sdk/models/updateprojectprincipalvia.js";

let value: UpdateProjectPrincipal4 = {
  integration: {
    configurationId: "<id>",
    integrationId: "<id>",
  },
  type: "integration",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `integration`                                                                              | [models.UpdateProjectPrincipalIntegration](../models/updateprojectprincipalintegration.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `type`                                                                                     | *"integration"*                                                                            | :heavy_check_mark:                                                                         | N/A                                                                                        |