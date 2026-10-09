# DeleteProjectAvatarAlias

## Example Usage

```typescript
import { DeleteProjectAvatarAlias } from "@vercel/sdk/models/deleteprojectavatarreadysubstate.js";

let value: DeleteProjectAvatarAlias = {
  deployment: {
    createdAt: 7179.97,
    createdIn: "<value>",
    creator: {
      email: "Barbara.Champlin@gmail.com",
      uid: "<id>",
      username: "Donny63",
    },
    deploymentHostname: "<value>",
    id: "<id>",
    name: "<value>",
    plan: "hobby",
    previewCommentsEnabled: false,
    private: true,
    readyState: "BUILDING",
    type: "LAMBDAS",
    url: "https://gray-pension.name/",
  },
  domain: "key-bathhouse.com",
  environment: "production",
  target: "PREVIEW",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `configuredBy`                                                                         | [models.DeleteProjectAvatarConfiguredBy](../models/deleteprojectavatarconfiguredby.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `configuredChangedAt`                                                                  | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `createdAt`                                                                            | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `deployment`                                                                           | [models.DeleteProjectAvatarDeployment](../models/deleteprojectavatardeployment.md)     | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `domain`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `environment`                                                                          | [models.DeleteProjectAvatarEnvironment](../models/deleteprojectavatarenvironment.md)   | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `gitBranch`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `redirect`                                                                             | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `redirectStatusCode`                                                                   | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `target`                                                                               | [models.DeleteProjectAvatarTarget](../models/deleteprojectavatartarget.md)             | :heavy_check_mark:                                                                     | N/A                                                                                    |