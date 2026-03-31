# GetProjectsLink6

## Example Usage

```typescript
import { GetProjectsLink6 } from "@vercel/sdk/models/responsebodyissuermode.js";

let value: GetProjectsLink6 = {
  org: "<value>",
  repo: "<value>",
  type: "vercel",
  deployHooks: [
    {
      id: "<id>",
      name: "<value>",
      ref: "<value>",
      url: "https://possible-label.name/",
    },
  ],
  gitCredentialId: "<id>",
  productionBranch: "<value>",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `org`                                                                                                                | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `repo`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `type`                                                                                                               | *"vercel"*                                                                                                           | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `createdAt`                                                                                                          | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `deployHooks`                                                                                                        | [models.GetProjectsLinkProjectsResponse200DeployHooks](../models/getprojectslinkprojectsresponse200deployhooks.md)[] | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `gitCredentialId`                                                                                                    | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `updatedAt`                                                                                                          | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `sourceless`                                                                                                         | *boolean*                                                                                                            | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `productionBranch`                                                                                                   | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |