# CreateDeploymentGitRepo2

## Example Usage

```typescript
import { CreateDeploymentGitRepo2 } from "@vercel/sdk/models/createdeploymentresponsebody.js";

let value: CreateDeploymentGitRepo2 = {
  org: "<value>",
  repo: "<value>",
  repoId: 3821.64,
  type: "github",
  repoOwnerId: 3124.68,
  path: "/Network",
  defaultBranch: "<value>",
  name: "<value>",
  private: false,
  ownerType: "team",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `org`                                                                                                          | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `repo`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `repoId`                                                                                                       | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `type`                                                                                                         | *"github"*                                                                                                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `repoOwnerId`                                                                                                  | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `path`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `defaultBranch`                                                                                                | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `name`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `private`                                                                                                      | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `ownerType`                                                                                                    | [models.CreateDeploymentGitRepoDeploymentsOwnerType](../models/createdeploymentgitrepodeploymentsownertype.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |