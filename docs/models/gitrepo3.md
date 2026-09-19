# GitRepo3

## Example Usage

```typescript
import { GitRepo3 } from "@vercel/sdk/models/canceldeploymentbuildmachine.js";

let value: GitRepo3 = {
  defaultBranch: "<value>",
  name: "<value>",
  owner: "<value>",
  ownerType: "user",
  path: "/usr/local/src",
  private: true,
  repoUuid: "<id>",
  slug: "<value>",
  type: "bitbucket",
  workspaceUuid: "<id>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `defaultBranch`                                                                          | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `owner`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `ownerType`                                                                              | [models.CancelDeploymentGitRepoOwnerType](../models/canceldeploymentgitrepoownertype.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `path`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `private`                                                                                | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `repoUuid`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `slug`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `type`                                                                                   | *"bitbucket"*                                                                            | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `workspaceUuid`                                                                          | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |