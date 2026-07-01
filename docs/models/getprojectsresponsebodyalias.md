# GetProjectsResponseBodyAlias

## Example Usage

```typescript
import { GetProjectsResponseBodyAlias } from "@vercel/sdk/models/getprojectsresponsebodyissuermode.js";

let value: GetProjectsResponseBodyAlias = {
  deployment: {
    id: "<id>",
    createdAt: 2521.56,
    createdIn: "<value>",
    creator: {
      email: "Augusta_Thompson@gmail.com",
      uid: "<id>",
      username: "Guadalupe_Satterfield",
    },
    deploymentHostname: "<value>",
    name: "<value>",
    plan: "pro",
    previewCommentsEnabled: false,
    private: false,
    readyState: "QUEUED",
    type: "LAMBDAS",
    url: "https://stingy-outlaw.biz",
    userId: "<id>",
  },
  domain: "black-and-white-crest.biz",
  environment: "preview",
  target: "STAGING",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `configuredBy`                                                                                                     | [models.GetProjectsResponseBodyConfiguredBy](../models/getprojectsresponsebodyconfiguredby.md)                     | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `configuredChangedAt`                                                                                              | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `createdAt`                                                                                                        | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `deployment`                                                                                                       | [models.GetProjectsResponseBodyDeployment](../models/getprojectsresponsebodydeployment.md)                         | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `domain`                                                                                                           | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `environment`                                                                                                      | [models.GetProjectsResponseBodyEnvironment](../models/getprojectsresponsebodyenvironment.md)                       | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `gitBranch`                                                                                                        | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `redirect`                                                                                                         | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `redirectStatusCode`                                                                                               | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `target`                                                                                                           | [models.GetProjectsResponseBodyProjectsResponseTarget](../models/getprojectsresponsebodyprojectsresponsetarget.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |