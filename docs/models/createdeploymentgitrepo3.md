# CreateDeploymentGitRepo3

## Example Usage

```typescript
import { CreateDeploymentGitRepo3 } from "@vercel/sdk/models/createdeploymentresponsebody.js";

let value: CreateDeploymentGitRepo3 = {
  owner: "<value>",
  repoUuid: "<id>",
  slug: "<value>",
  type: "bitbucket",
  workspaceUuid: "<id>",
  path: "/rescue",
  defaultBranch: "<value>",
  name: "<value>",
  private: true,
  ownerType: "user",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `owner`                                                                                                                        | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `repoUuid`                                                                                                                     | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `slug`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `type`                                                                                                                         | *"bitbucket"*                                                                                                                  | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `workspaceUuid`                                                                                                                | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `path`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `defaultBranch`                                                                                                                | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `name`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `private`                                                                                                                      | *boolean*                                                                                                                      | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `ownerType`                                                                                                                    | [models.CreateDeploymentGitRepoDeploymentsResponseOwnerType](../models/createdeploymentgitrepodeploymentsresponseownertype.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |