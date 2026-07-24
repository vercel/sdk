# Alias

## Example Usage

```typescript
import { Alias } from "@vercel/sdk/models/createprojectbuildmachineselection.js";

let value: Alias = {
  deployment: {
    id: "<id>",
    createdAt: 6834.37,
    createdIn: "<value>",
    creator: {
      email: "Robin_Rempel@gmail.com",
      uid: "<id>",
      username: "Kellie_Boyer3",
    },
    deploymentHostname: "<value>",
    name: "<value>",
    plan: "pro",
    previewCommentsEnabled: false,
    private: true,
    readyState: "BLOCKED",
    type: "LAMBDAS",
    url: "https://insecure-cantaloupe.name",
    userId: "<id>",
  },
  domain: "frugal-ribbon.org",
  environment: "preview",
  target: "PREVIEW",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `configuredBy`                                                                 | [models.CreateProjectConfiguredBy](../models/createprojectconfiguredby.md)     | :heavy_minus_sign:                                                             | N/A                                                                            |
| `configuredChangedAt`                                                          | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `createdAt`                                                                    | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `deployment`                                                                   | [models.CreateProjectDeployment](../models/createprojectdeployment.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `domain`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `environment`                                                                  | [models.CreateProjectEnvironment](../models/createprojectenvironment.md)       | :heavy_check_mark:                                                             | N/A                                                                            |
| `gitBranch`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `redirect`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `redirectStatusCode`                                                           | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `target`                                                                       | [models.CreateProjectProjectsTarget](../models/createprojectprojectstarget.md) | :heavy_check_mark:                                                             | N/A                                                                            |