# UpdateProjectAlias

## Example Usage

```typescript
import { UpdateProjectAlias } from "@vercel/sdk/models/updateprojectbuilds.js";

let value: UpdateProjectAlias = {
  deployment: {
    id: "<id>",
    createdAt: 6761.1,
    createdIn: "<value>",
    creator: {
      email: "Hayley.Schmitt15@hotmail.com",
      uid: "<id>",
      username: "Guido_Cassin",
    },
    deploymentHostname: "<value>",
    name: "<value>",
    plan: "hobby",
    previewCommentsEnabled: false,
    private: true,
    readyState: "BUILDING",
    type: "LAMBDAS",
    url: "https://knotty-sock.info/",
    userId: "<id>",
  },
  domain: "yellow-dead.com",
  environment: "preview",
  target: "PREVIEW",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `configuredBy`                                                             | [models.UpdateProjectConfiguredBy](../models/updateprojectconfiguredby.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `configuredChangedAt`                                                      | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `createdAt`                                                                | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `deployment`                                                               | [models.UpdateProjectDeployment](../models/updateprojectdeployment.md)     | :heavy_check_mark:                                                         | N/A                                                                        |
| `domain`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `environment`                                                              | [models.UpdateProjectEnvironment](../models/updateprojectenvironment.md)   | :heavy_check_mark:                                                         | N/A                                                                        |
| `gitBranch`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `redirect`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `redirectStatusCode`                                                       | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `target`                                                                   | [models.UpdateProjectTarget](../models/updateprojecttarget.md)             | :heavy_check_mark:                                                         | N/A                                                                        |