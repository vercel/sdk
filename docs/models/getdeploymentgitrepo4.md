# GetDeploymentGitRepo4

## Example Usage

```typescript
import { GetDeploymentGitRepo4 } from "@vercel/sdk/models/getdeploymentresponsebody.js";

let value: GetDeploymentGitRepo4 = {
  org: "<value>",
  repo: "<value>",
  type: "vercel",
  path: "/etc/namedb",
  defaultBranch: "<value>",
  name: "<value>",
  private: false,
  ownerType: "user",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `org`                                                                                                    | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `repo`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `type`                                                                                                   | *"vercel"*                                                                                               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `path`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `defaultBranch`                                                                                          | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `private`                                                                                                | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `ownerType`                                                                                              | [models.GetDeploymentGitRepoDeploymentsOwnerType](../models/getdeploymentgitrepodeploymentsownertype.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |