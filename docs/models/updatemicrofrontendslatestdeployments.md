# UpdateMicrofrontendsLatestDeployments

## Example Usage

```typescript
import { UpdateMicrofrontendsLatestDeployments } from "@vercel/sdk/models/updatemicrofrontendsop.js";

let value: UpdateMicrofrontendsLatestDeployments = {
  createdAt: 8589.88,
  createdIn: "<value>",
  creator: {
    email: "Jose20@hotmail.com",
    uid: "<id>",
    username: "Rosetta.Ebert57",
  },
  deploymentHostname: "<value>",
  name: "<value>",
  id: "<id>",
  plan: "<value>",
  private: false,
  readyState: "<value>",
  type: "<value>",
  url: "https://brave-corporation.net",
  userId: "<id>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `alias`                                                                        | *string*[]                                                                     | :heavy_minus_sign:                                                             | N/A                                                                            |
| `aliasAssigned`                                                                | *models.UpdateMicrofrontendsAliasAssigned*                                     | :heavy_minus_sign:                                                             | N/A                                                                            |
| `builds`                                                                       | [models.UpdateMicrofrontendsBuilds](../models/updatemicrofrontendsbuilds.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `createdAt`                                                                    | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `createdIn`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `creator`                                                                      | [models.UpdateMicrofrontendsCreator](../models/updatemicrofrontendscreator.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `deploymentHostname`                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `forced`                                                                       | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `meta`                                                                         | Record<string, *string*>                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `plan`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `private`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `readyState`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `requestedAt`                                                                  | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `target`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `teamId`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `type`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `url`                                                                          | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `userId`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `withCache`                                                                    | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |