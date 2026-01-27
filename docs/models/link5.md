# Link5

## Example Usage

```typescript
import { Link5 } from "@vercel/sdk/models/createprojectop.js";

let value: Link5 = {
  name: "<value>",
  slug: "<value>",
  owner: "<value>",
  type: "bitbucket",
  uuid: "db41c2ce-804b-460c-bab1-a5e2d810be5f",
  workspaceUuid: "<id>",
  deployHooks: [
    {
      id: "<id>",
      name: "<value>",
      ref: "<value>",
      url: "https://insistent-bourgeoisie.name/",
    },
  ],
  gitCredentialId: "<id>",
  productionBranch: "<value>",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `slug`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `owner`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `type`                                                                                                             | *"bitbucket"*                                                                                                      | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `uuid`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `workspaceUuid`                                                                                                    | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `createdAt`                                                                                                        | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `deployHooks`                                                                                                      | [models.CreateProjectLinkProjectsResponseDeployHooks](../models/createprojectlinkprojectsresponsedeployhooks.md)[] | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `gitCredentialId`                                                                                                  | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `updatedAt`                                                                                                        | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `sourceless`                                                                                                       | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `productionBranch`                                                                                                 | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |