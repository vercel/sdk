# UploadProjectAvatarAlias

## Example Usage

```typescript
import { UploadProjectAvatarAlias } from "@vercel/sdk/models/uploadprojectavatarprojectsaliasassigned.js";

let value: UploadProjectAvatarAlias = {
  deployment: {
    id: "<id>",
    createdAt: 1199.75,
    createdIn: "<value>",
    creator: {
      email: "Leatha7@gmail.com",
      uid: "<id>",
      username: "Rebeka.Moen",
    },
    deploymentHostname: "<value>",
    name: "<value>",
    plan: "enterprise",
    previewCommentsEnabled: false,
    private: false,
    readyState: "QUEUED",
    type: "LAMBDAS",
    url: "https://menacing-orchid.biz/",
    userId: "<id>",
  },
  domain: "aching-brook.com",
  environment: "production",
  target: "STAGING",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `configuredBy`                                                                         | [models.UploadProjectAvatarConfiguredBy](../models/uploadprojectavatarconfiguredby.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `configuredChangedAt`                                                                  | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `createdAt`                                                                            | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `deployment`                                                                           | [models.UploadProjectAvatarDeployment](../models/uploadprojectavatardeployment.md)     | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `domain`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `environment`                                                                          | [models.UploadProjectAvatarEnvironment](../models/uploadprojectavatarenvironment.md)   | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `gitBranch`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `redirect`                                                                             | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `redirectStatusCode`                                                                   | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `target`                                                                               | [models.UploadProjectAvatarTarget](../models/uploadprojectavatartarget.md)             | :heavy_check_mark:                                                                     | N/A                                                                                    |