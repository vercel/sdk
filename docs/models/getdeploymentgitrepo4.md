# GetDeploymentGitRepo4

## Example Usage

```typescript
import { GetDeploymentGitRepo4 } from "@vercel/sdk/models/getdeploymentgitsourcedeploymentsresponse200applicationjsonresponsebody216type.js";

let value: GetDeploymentGitRepo4 = {
  defaultBranch: "<value>",
  name: "<value>",
  org: "<value>",
  ownerType: "team",
  path: "/sbin",
  private: false,
  repo: "<value>",
  type: "vercel",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `defaultBranch`                                                                                          | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `org`                                                                                                    | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `ownerType`                                                                                              | [models.GetDeploymentGitRepoDeploymentsOwnerType](../models/getdeploymentgitrepodeploymentsownertype.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `path`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `private`                                                                                                | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `repo`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `type`                                                                                                   | *"vercel"*                                                                                               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |