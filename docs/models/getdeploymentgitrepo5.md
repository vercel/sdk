# GetDeploymentGitRepo5

## Example Usage

```typescript
import { GetDeploymentGitRepo5 } from "@vercel/sdk/models/getdeploymentresponsebody.js";

let value: GetDeploymentGitRepo5 = {
  owner: "<value>",
  repo: "<value>",
  repoId: "<id>",
  type: "cursor-origin",
  path: "/bin",
  defaultBranch: "<value>",
  name: "<value>",
  private: false,
  ownerType: "user",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `owner`                                                                                                                  | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Owner (namespace) slug.                                                                                                  |
| `repo`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `repoId`                                                                                                                 | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Origin repository id.                                                                                                    |
| `type`                                                                                                                   | *"cursor-origin"*                                                                                                        | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `path`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `defaultBranch`                                                                                                          | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `name`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `private`                                                                                                                | *boolean*                                                                                                                | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `ownerType`                                                                                                              | [models.GetDeploymentGitRepoDeploymentsResponseOwnerType](../models/getdeploymentgitrepodeploymentsresponseownertype.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |