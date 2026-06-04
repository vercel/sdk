# UploadProjectAvatarTargets

## Example Usage

```typescript
import { UploadProjectAvatarTargets } from "@vercel/sdk/models/uploadprojectavatarmanagedrules.js";

let value: UploadProjectAvatarTargets = {
  createdAt: 7232.12,
  createdIn: "<value>",
  creator: {
    email: "Stan69@hotmail.com",
    uid: "<id>",
    username: "Dorris.Wiegand",
  },
  deploymentHostname: "<value>",
  name: "<value>",
  id: "<id>",
  plan: "<value>",
  private: true,
  readyState: "<value>",
  type: "<value>",
  url: "https://mundane-cow.biz/",
  userId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `alias`                                                                                      | *string*[]                                                                                   | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `aliasAssigned`                                                                              | *models.UploadProjectAvatarProjectsAliasAssigned*                                            | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `builds`                                                                                     | [models.UploadProjectAvatarProjectsBuilds](../models/uploadprojectavatarprojectsbuilds.md)[] | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `createdAt`                                                                                  | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `createdIn`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `creator`                                                                                    | [models.UploadProjectAvatarProjectsCreator](../models/uploadprojectavatarprojectscreator.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `deploymentHostname`                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `forced`                                                                                     | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `meta`                                                                                       | Record<string, *string*>                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `plan`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `private`                                                                                    | *boolean*                                                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `readyState`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `requestedAt`                                                                                | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `target`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `teamId`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `type`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `url`                                                                                        | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `userId`                                                                                     | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `withCache`                                                                                  | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |