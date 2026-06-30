# GetProjectAlias

## Example Usage

```typescript
import { GetProjectAlias } from "@vercel/sdk/models/getprojectlastrollbacktarget.js";

let value: GetProjectAlias = {
  deployment: {
    id: "<id>",
    createdAt: 6441.78,
    createdIn: "<value>",
    creator: {
      email: "Friedrich_Satterfield44@gmail.com",
      uid: "<id>",
      username: "Elsie33",
    },
    deploymentHostname: "<value>",
    name: "<value>",
    plan: "hobby",
    previewCommentsEnabled: false,
    private: false,
    readyState: "CANCELED",
    type: "LAMBDAS",
    url: "https://well-lit-grandson.info",
    userId: "<id>",
  },
  domain: "babyish-blowgun.net",
  environment: "production",
  target: "PREVIEW",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `configuredBy`                                                       | [models.GetProjectConfiguredBy](../models/getprojectconfiguredby.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
| `configuredChangedAt`                                                | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `createdAt`                                                          | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `deployment`                                                         | [models.GetProjectDeployment](../models/getprojectdeployment.md)     | :heavy_check_mark:                                                   | N/A                                                                  |
| `domain`                                                             | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `environment`                                                        | [models.GetProjectEnvironment](../models/getprojectenvironment.md)   | :heavy_check_mark:                                                   | N/A                                                                  |
| `gitBranch`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `redirect`                                                           | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `redirectStatusCode`                                                 | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `target`                                                             | [models.GetProjectTarget](../models/getprojecttarget.md)             | :heavy_check_mark:                                                   | N/A                                                                  |