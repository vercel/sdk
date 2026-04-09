# Link6

## Example Usage

```typescript
import { Link6 } from "@vercel/sdk/models/flatratetier.js";

let value: Link6 = {
  org: "<value>",
  repo: "<value>",
  type: "vercel",
  deployHooks: [
    {
      id: "<id>",
      name: "<value>",
      ref: "<value>",
      url: "https://ultimate-outrun.info/",
    },
  ],
  gitCredentialId: "<id>",
  productionBranch: "<value>",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `org`                                                                                                                    | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `repo`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `type`                                                                                                                   | *"vercel"*                                                                                                               | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `createdAt`                                                                                                              | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `deployHooks`                                                                                                            | [models.CreateProjectLinkProjectsResponse200DeployHooks](../models/createprojectlinkprojectsresponse200deployhooks.md)[] | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `gitCredentialId`                                                                                                        | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `updatedAt`                                                                                                              | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `sourceless`                                                                                                             | *boolean*                                                                                                                | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `productionBranch`                                                                                                       | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |