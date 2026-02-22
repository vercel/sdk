# GetProjectsLink5

## Example Usage

```typescript
import { GetProjectsLink5 } from "@vercel/sdk/models/getprojectsrouteprojects1.js";

let value: GetProjectsLink5 = {
  name: "<value>",
  slug: "<value>",
  owner: "<value>",
  type: "bitbucket",
  uuid: "2c8c1b05-c73d-47ef-8b00-6fd5afb6a034",
  workspaceUuid: "<id>",
  deployHooks: [
    {
      id: "<id>",
      name: "<value>",
      ref: "<value>",
      url: "https://sunny-longboat.com",
    },
  ],
  gitCredentialId: "<id>",
  productionBranch: "<value>",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `slug`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `owner`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `type`                                                                                                         | *"bitbucket"*                                                                                                  | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `uuid`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `workspaceUuid`                                                                                                | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `createdAt`                                                                                                    | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `deployHooks`                                                                                                  | [models.GetProjectsLinkProjectsResponseDeployHooks](../models/getprojectslinkprojectsresponsedeployhooks.md)[] | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `gitCredentialId`                                                                                              | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `updatedAt`                                                                                                    | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `sourceless`                                                                                                   | *boolean*                                                                                                      | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `productionBranch`                                                                                             | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |