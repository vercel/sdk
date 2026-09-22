# GetDeploymentGitRepo3

## Example Usage

```typescript
import { GetDeploymentGitRepo3 } from "@vercel/sdk/models/getdeploymentgitsourcedeploymentsresponse200applicationjsonresponsebody219type.js";

let value: GetDeploymentGitRepo3 = {
  defaultBranch: "<value>",
  name: "<value>",
  owner: "<value>",
  ownerType: "user",
  path: "/Library",
  private: true,
  repoUuid: "<id>",
  slug: "<value>",
  type: "bitbucket",
  workspaceUuid: "<id>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `defaultBranch`                                                                    | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `owner`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `ownerType`                                                                        | [models.GetDeploymentGitRepoOwnerType](../models/getdeploymentgitrepoownertype.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `path`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `private`                                                                          | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `repoUuid`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `slug`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `type`                                                                             | *"bitbucket"*                                                                      | :heavy_check_mark:                                                                 | N/A                                                                                |
| `workspaceUuid`                                                                    | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |