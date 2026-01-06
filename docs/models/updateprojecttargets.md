# UpdateProjectTargets

## Example Usage

```typescript
import { UpdateProjectTargets } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectTargets = {
  createdAt: 9376.19,
  createdIn: "<value>",
  creator: {
    email: "Josiah94@hotmail.com",
    uid: "<id>",
    username: "Junior.Strosin66",
  },
  deploymentHostname: "<value>",
  name: "<value>",
  id: "<id>",
  plan: "<value>",
  private: false,
  readyState: "<value>",
  type: "<value>",
  url: "https://weighty-declaration.com",
  userId: "<id>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `alias`                                                                          | *string*[]                                                                       | :heavy_minus_sign:                                                               | N/A                                                                              |
| `aliasAssigned`                                                                  | *models.UpdateProjectProjectsAliasAssigned*                                      | :heavy_minus_sign:                                                               | N/A                                                                              |
| `builds`                                                                         | [models.UpdateProjectProjectsBuilds](../models/updateprojectprojectsbuilds.md)[] | :heavy_minus_sign:                                                               | N/A                                                                              |
| `createdAt`                                                                      | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `createdIn`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `creator`                                                                        | [models.UpdateProjectProjectsCreator](../models/updateprojectprojectscreator.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `deploymentHostname`                                                             | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `name`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `forced`                                                                         | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |
| `id`                                                                             | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `meta`                                                                           | Record<string, *string*>                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `plan`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `private`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `readyState`                                                                     | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `requestedAt`                                                                    | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `target`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `teamId`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `type`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `url`                                                                            | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `userId`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `withCache`                                                                      | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |