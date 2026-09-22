# GitRepo2

## Example Usage

```typescript
import { GitRepo2 } from "@vercel/sdk/models/readystate.js";

let value: GitRepo2 = {
  defaultBranch: "<value>",
  name: "<value>",
  org: "<value>",
  ownerType: "team",
  path: "/usr/src",
  private: true,
  repo: "<value>",
  repoId: 4778.01,
  repoOwnerId: 290.03,
  type: "github",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `defaultBranch`                                          | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `name`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `org`                                                    | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `ownerType`                                              | [models.GitRepoOwnerType](../models/gitrepoownertype.md) | :heavy_check_mark:                                       | N/A                                                      |
| `path`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `private`                                                | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `repo`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `repoId`                                                 | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `repoOwnerId`                                            | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `type`                                                   | *"github"*                                               | :heavy_check_mark:                                       | N/A                                                      |