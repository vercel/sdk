# ResponseBodyAlias

## Example Usage

```typescript
import { ResponseBodyAlias } from "@vercel/sdk/models/getprojectsop.js";

let value: ResponseBodyAlias = {
  deployment: {
    createdAt: 4315.2,
    createdIn: "<value>",
    creator: {
      email: "Augusta_Thompson@gmail.com",
      uid: "<id>",
      username: "Guadalupe_Satterfield",
    },
    deploymentHostname: "<value>",
    name: "<value>",
    id: "<id>",
    plan: "<value>",
    private: true,
    readyState: "<value>",
    type: "<value>",
    url: "https://expert-assist.org",
    userId: "<id>",
  },
  domain: "similar-innovation.com",
  environment: "production",
  target: "PRODUCTION",
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