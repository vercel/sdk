# CancelDeploymentGitRepo2

## Example Usage

```typescript
import { CancelDeploymentGitRepo2 } from "@vercel/sdk/models/canceldeploymentop.js";

let value: CancelDeploymentGitRepo2 = {
  org: "<value>",
  repo: "<value>",
  repoId: 455.1,
  type: "github",
  repoOwnerId: 1979.82,
  path: "/opt/lib",
  defaultBranch: "<value>",
  name: "<value>",
  private: false,
  ownerType: "user",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `org`                                                                                                          | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `repo`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `repoId`                                                                                                       | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `type`                                                                                                         | [models.CancelDeploymentGitRepoDeploymentsType](../models/canceldeploymentgitrepodeploymentstype.md)           | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `repoOwnerId`                                                                                                  | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `path`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `defaultBranch`                                                                                                | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `name`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `private`                                                                                                      | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `ownerType`                                                                                                    | [models.CancelDeploymentGitRepoDeploymentsOwnerType](../models/canceldeploymentgitrepodeploymentsownertype.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |