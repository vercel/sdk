# GitRepo5

## Example Usage

```typescript
import { GitRepo5 } from "@vercel/sdk/models/canceldeploymentresourceconfig.js";

let value: GitRepo5 = {
  defaultBranch: "<value>",
  name: "<value>",
  owner: "<value>",
  ownerType: "user",
  path: "/var",
  private: false,
  repo: "<value>",
  repoId: "<id>",
  type: "cursor-origin",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `defaultBranch`                                                                                                                | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `name`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `owner`                                                                                                                        | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | Owner (namespace) slug.                                                                                                        |
| `ownerType`                                                                                                                    | [models.CancelDeploymentGitRepoDeploymentsResponseOwnerType](../models/canceldeploymentgitrepodeploymentsresponseownertype.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `path`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `private`                                                                                                                      | *boolean*                                                                                                                      | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `repo`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `repoId`                                                                                                                       | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | Origin repository id.                                                                                                          |
| `type`                                                                                                                         | *"cursor-origin"*                                                                                                              | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |