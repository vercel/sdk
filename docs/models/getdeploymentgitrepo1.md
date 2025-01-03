# GetDeploymentGitRepo1

## Example Usage

```typescript
import { GetDeploymentGitRepo1 } from "@vercel/sdk/models/getdeploymentop.js";

let value: GetDeploymentGitRepo1 = {
  namespace: "<value>",
  projectId: 2445.70,
  type: "gitlab",
  url: "https://small-creator.name/",
  path: "/home",
  defaultBranch: "<value>",
  name: "<value>",
  private: false,
  ownerType: "team",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `namespace`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `projectId`                                                                                                    | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `type`                                                                                                         | [models.GetDeploymentGitRepoDeploymentsResponseType](../models/getdeploymentgitrepodeploymentsresponsetype.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `url`                                                                                                          | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `path`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `defaultBranch`                                                                                                | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `name`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `private`                                                                                                      | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `ownerType`                                                                                                    | [models.GetDeploymentGitRepoDeploymentsOwnerType](../models/getdeploymentgitrepodeploymentsownertype.md)       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |