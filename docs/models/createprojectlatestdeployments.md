# CreateProjectLatestDeployments

## Example Usage

```typescript
import { CreateProjectLatestDeployments } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectLatestDeployments = {
  createdAt: 3885.01,
  createdIn: "<value>",
  creator: {
    email: "Archibald.Stanton8@gmail.com",
    uid: "<id>",
    username: "Tiara_Murray",
  },
  deploymentHostname: "<value>",
  name: "<value>",
  id: "<id>",
  plan: "<value>",
  private: true,
  readyState: "<value>",
  type: "<value>",
  url: "https://excitable-intent.org/",
  userId: "<id>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `alias`                                                          | *string*[]                                                       | :heavy_minus_sign:                                               | N/A                                                              |
| `aliasAssigned`                                                  | *models.CreateProjectAliasAssigned*                              | :heavy_minus_sign:                                               | N/A                                                              |
| `builds`                                                         | [models.CreateProjectBuilds](../models/createprojectbuilds.md)[] | :heavy_minus_sign:                                               | N/A                                                              |
| `createdAt`                                                      | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `createdIn`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `creator`                                                        | [models.CreateProjectCreator](../models/createprojectcreator.md) | :heavy_check_mark:                                               | N/A                                                              |
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