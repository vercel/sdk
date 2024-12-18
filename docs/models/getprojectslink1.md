# GetProjectsLink1

## Example Usage

```typescript
import { GetProjectsLink1 } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsLink1 = {
  deployHooks: [
    {
      id: "<id>",
      name: "<value>",
      ref: "<value>",
      url: "https://buzzing-underneath.org",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `org`                                                                                                                                                        | *string*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |
| `repoOwnerId`                                                                                                                                                | *number*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | A new field, should be included in all new project links, is being added just in time when a deployment is created. This is needed for Protected Git scopes. |
| `repo`                                                                                                                                                       | *string*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |
| `repoId`                                                                                                                                                     | *number*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |
| `type`                                                                                                                                                       | [models.GetProjectsLinkType](../models/getprojectslinktype.md)                                                                                               | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |
| `createdAt`                                                                                                                                                  | *number*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |
| `deployHooks`                                                                                                                                                | [models.GetProjectsLinkDeployHooks](../models/getprojectslinkdeployhooks.md)[]                                                                               | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `gitCredentialId`                                                                                                                                            | *string*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |
| `updatedAt`                                                                                                                                                  | *number*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |
| `sourceless`                                                                                                                                                 | *boolean*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |
| `productionBranch`                                                                                                                                           | *string*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |