# Link6

## Example Usage

```typescript
import { Link6 } from "@vercel/sdk/models/createprojectprojectsresponse200applicationjsonresponsebodytargetstype.js";

let value: Link6 = {
  deployHooks: [
    {
      id: "<id>",
      name: "<value>",
      ref: "<value>",
      url: "https://ultimate-outrun.info/",
    },
  ],
  gitCredentialId: "<id>",
  org: "<value>",
  productionBranch: "<value>",
  repo: "<value>",
  repoId: "<id>",
  type: "vercel",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                                              | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `deployHooks`                                                                                                            | [models.CreateProjectLinkProjectsResponse200DeployHooks](../models/createprojectlinkprojectsresponse200deployhooks.md)[] | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `gitCredentialId`                                                                                                        | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `org`                                                                                                                    | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `productionBranch`                                                                                                       | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `repo`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `repoId`                                                                                                                 | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `sourceless`                                                                                                             | *boolean*                                                                                                                | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `type`                                                                                                                   | *"vercel"*                                                                                                               | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `updatedAt`                                                                                                              | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |