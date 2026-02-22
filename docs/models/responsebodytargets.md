# ResponseBodyTargets

## Example Usage

```typescript
import { ResponseBodyTargets } from "@vercel/sdk/models/getprojectsrouteprojects1.js";

let value: ResponseBodyTargets = {
  createdAt: 6936.04,
  createdIn: "<value>",
  creator: {
    email: "Alexzander.Connelly68@gmail.com",
    uid: "<id>",
    username: "Donny80",
  },
  deploymentHostname: "<value>",
  name: "<value>",
  id: "<id>",
  plan: "<value>",
  private: true,
  readyState: "<value>",
  type: "<value>",
  url: "https://ecstatic-secret.net",
  userId: "<id>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `alias`                                                                                              | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `aliasAssigned`                                                                                      | *models.ResponseBodyAliasAssigned*                                                                   | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `builds`                                                                                             | [models.GetProjectsResponseBodyProjectsBuilds](../models/getprojectsresponsebodyprojectsbuilds.md)[] | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `createdAt`                                                                                          | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `createdIn`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `creator`                                                                                            | [models.GetProjectsResponseBodyProjectsCreator](../models/getprojectsresponsebodyprojectscreator.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `deploymentHostname`                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `forced`                                                                                             | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `meta`                                                                                               | Record<string, *string*>                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `plan`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `private`                                                                                            | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `readyState`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `requestedAt`                                                                                        | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `target`                                                                                             | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `teamId`                                                                                             | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `type`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `url`                                                                                                | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `userId`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `withCache`                                                                                          | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |