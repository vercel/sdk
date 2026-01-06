# UpdateProjectLatestDeployments

## Example Usage

```typescript
import { UpdateProjectLatestDeployments } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectLatestDeployments = {
  createdAt: 5561.43,
  createdIn: "<value>",
  creator: {
    email: "Margret_Volkman@gmail.com",
    uid: "<id>",
    username: "Skye_Bartell",
  },
  deploymentHostname: "<value>",
  name: "<value>",
  id: "<id>",
  plan: "<value>",
  private: false,
  readyState: "<value>",
  type: "<value>",
  url: "https://pleasant-lotion.biz",
  userId: "<id>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `alias`                                                          | *string*[]                                                       | :heavy_minus_sign:                                               | N/A                                                              |
| `aliasAssigned`                                                  | *models.UpdateProjectAliasAssigned*                              | :heavy_minus_sign:                                               | N/A                                                              |
| `builds`                                                         | [models.UpdateProjectBuilds](../models/updateprojectbuilds.md)[] | :heavy_minus_sign:                                               | N/A                                                              |
| `createdAt`                                                      | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `createdIn`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `creator`                                                        | [models.UpdateProjectCreator](../models/updateprojectcreator.md) | :heavy_check_mark:                                               | N/A                                                              |
| `deploymentHostname`                                             | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `forced`                                                         | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `meta`                                                           | Record<string, *string*>                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `plan`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `private`                                                        | *boolean*                                                        | :heavy_check_mark:                                               | N/A                                                              |
| `readyState`                                                     | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `requestedAt`                                                    | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `target`                                                         | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `teamId`                                                         | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `type`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `url`                                                            | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `userId`                                                         | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `withCache`                                                      | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |