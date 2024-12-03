# GetDeploymentGitRepo1

## Example Usage

```typescript
import { GetDeploymentGitRepo1 } from "@vercel/sdk/models/operations/getdeployment.js";

let value: GetDeploymentGitRepo1 = {
  namespace: "<value>",
  projectId: 5024.53,
  type: "gitlab",
  url: "https://creamy-saloon.name/",
  path: "/var/tmp",
  defaultBranch: "<value>",
  name: "<value>",
  private: false,
  ownerType: "user",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `namespace`                                                                                                                      | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `projectId`                                                                                                                      | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `type`                                                                                                                           | [operations.GetDeploymentGitRepoDeploymentsResponseType](../../models/operations/getdeploymentgitrepodeploymentsresponsetype.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `url`                                                                                                                            | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `path`                                                                                                                           | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `defaultBranch`                                                                                                                  | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `name`                                                                                                                           | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `private`                                                                                                                        | *boolean*                                                                                                                        | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `ownerType`                                                                                                                      | [operations.GetDeploymentGitRepoDeploymentsOwnerType](../../models/operations/getdeploymentgitrepodeploymentsownertype.md)       | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |