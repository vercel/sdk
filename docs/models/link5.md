# Link5

## Example Usage

```typescript
import { Link5 } from "@vercel/sdk/models/createprojectprojectsresponse200applicationjsonresponsebodytargetstype.js";

let value: Link5 = {
  deployHooks: [
    {
      id: "<id>",
      name: "<value>",
      ref: "<value>",
      url: "https://fatal-bungalow.net",
    },
  ],
  gitCredentialId: "<id>",
  name: "<value>",
  owner: "<value>",
  productionBranch: "<value>",
  slug: "<value>",
  type: "bitbucket",
  uuid: "2ce804b6-0cab-41a5-ae2d-810be5fcd261",
  workspaceUuid: "<id>",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                                        | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `deployHooks`                                                                                                      | [models.CreateProjectLinkProjectsResponseDeployHooks](../models/createprojectlinkprojectsresponsedeployhooks.md)[] | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `gitCredentialId`                                                                                                  | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `name`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `owner`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `productionBranch`                                                                                                 | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `slug`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `sourceless`                                                                                                       | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `type`                                                                                                             | *"bitbucket"*                                                                                                      | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `updatedAt`                                                                                                        | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `uuid`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `workspaceUuid`                                                                                                    | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |