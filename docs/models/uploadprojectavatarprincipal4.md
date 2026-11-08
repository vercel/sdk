# UploadProjectAvatarPrincipal4

The principal who rolled back the project. Absent on historical rollbacks where the principal was a user (in this case, see `userId`).

## Example Usage

```typescript
import { UploadProjectAvatarPrincipal4 } from "@vercel/sdk/models/uploadprojectavatarfrom1.js";

let value: UploadProjectAvatarPrincipal4 = {
  integration: {
    configurationId: "<id>",
    integrationId: "<id>",
  },
  type: "integration",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `integration`                                                                                          | [models.UploadProjectAvatarPrincipalIntegration](../models/uploadprojectavatarprincipalintegration.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `type`                                                                                                 | *"integration"*                                                                                        | :heavy_check_mark:                                                                                     | N/A                                                                                                    |