# CreateProjectPrincipal4

The principal who rolled back the project. Absent on historical rollbacks where the principal was a user (in this case, see `userId`).

## Example Usage

```typescript
import { CreateProjectPrincipal4 } from "@vercel/sdk/models/createprojectprojectsoidctokenclaims.js";

let value: CreateProjectPrincipal4 = {
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
| `integration`                                                                              | [models.CreateProjectPrincipalIntegration](../models/createprojectprincipalintegration.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `type`                                                                                     | *"integration"*                                                                            | :heavy_check_mark:                                                                         | N/A                                                                                        |