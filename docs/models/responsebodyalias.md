# ResponseBodyAlias

## Example Usage

```typescript
import { ResponseBodyAlias } from "@vercel/sdk/models/getprojectscontenthint3.js";

let value: ResponseBodyAlias = {
  deployment: {
    id: "<id>",
    createdAt: 4315.2,
    createdIn: "<value>",
    creator: {
      email: "Mikel_Bechtelar@yahoo.com",
      uid: "<id>",
      username: "Annalise_DuBuque",
    },
    deploymentHostname: "<value>",
    name: "<value>",
    plan: "pro",
    previewCommentsEnabled: false,
    private: true,
    readyState: "BUILDING",
    type: "LAMBDAS",
    url: "https://outstanding-festival.biz",
    userId: "<id>",
  },
  domain: "odd-foodstuffs.name",
  environment: "preview",
  target: "PREVIEW",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `configuredBy`                                                                     | [models.ResponseBodyConfiguredBy](../models/responsebodyconfiguredby.md)           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `configuredChangedAt`                                                              | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `createdAt`                                                                        | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `deployment`                                                                       | [models.ResponseBodyDeployment](../models/responsebodydeployment.md)               | :heavy_check_mark:                                                                 | N/A                                                                                |
| `domain`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `environment`                                                                      | [models.ResponseBodyEnvironment](../models/responsebodyenvironment.md)             | :heavy_check_mark:                                                                 | N/A                                                                                |
| `gitBranch`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `redirect`                                                                         | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `redirectStatusCode`                                                               | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `target`                                                                           | [models.GetProjectsResponseBodyTarget](../models/getprojectsresponsebodytarget.md) | :heavy_check_mark:                                                                 | N/A                                                                                |