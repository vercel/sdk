# GetProjectsResponseBodyProjectsAlias

## Example Usage

```typescript
import { GetProjectsResponseBodyProjectsAlias } from "@vercel/sdk/models/getprojectsresponsebodyprojectsresponse200applicationjson3projectsreadysubstate.js";

let value: GetProjectsResponseBodyProjectsAlias = {
  deployment: {
    id: "<id>",
    createdAt: 7546.47,
    createdIn: "<value>",
    creator: {
      email: "Michaela_Dickens41@yahoo.com",
      uid: "<id>",
      username: "Sally.Beier",
    },
    deploymentHostname: "<value>",
    name: "<value>",
    plan: "enterprise",
    previewCommentsEnabled: false,
    private: true,
    readyState: "READY",
    type: "LAMBDAS",
    url: "https://impossible-dandelion.name",
    userId: "<id>",
  },
  domain: "far-off-forager.org",
  environment: "production",
  target: "STAGING",
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `configuredBy`                                                                                                                                         | [models.GetProjectsResponseBodyProjectsConfiguredBy](../models/getprojectsresponsebodyprojectsconfiguredby.md)                                         | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `configuredChangedAt`                                                                                                                                  | *number*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `createdAt`                                                                                                                                            | *number*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `deployment`                                                                                                                                           | [models.GetProjectsResponseBodyProjectsDeployment](../models/getprojectsresponsebodyprojectsdeployment.md)                                             | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `domain`                                                                                                                                               | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `environment`                                                                                                                                          | [models.GetProjectsResponseBodyProjectsEnvironment](../models/getprojectsresponsebodyprojectsenvironment.md)                                           | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `gitBranch`                                                                                                                                            | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `redirect`                                                                                                                                             | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `redirectStatusCode`                                                                                                                                   | *number*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `target`                                                                                                                                               | [models.GetProjectsResponseBodyProjectsResponse200ApplicationJSONTarget](../models/getprojectsresponsebodyprojectsresponse200applicationjsontarget.md) | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |