# Link7

## Example Usage

```typescript
import { Link7 } from "@vercel/sdk/models/createprojectpasswordprotection.js";

let value: Link7 = {
  org: "<value>",
  repo: "<value>",
  type: "v0",
  deployHooks: [
    {
      id: "<id>",
      name: "<value>",
      ref: "<value>",
      url: "https://confused-dish.info",
    },
  ],
  gitCredentialId: "<id>",
  productionBranch: "<value>",
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `org`                                                                                                                                                  | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `repo`                                                                                                                                                 | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `type`                                                                                                                                                 | *"v0"*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `createdAt`                                                                                                                                            | *number*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `deployHooks`                                                                                                                                          | [models.CreateProjectLinkProjectsResponse200ApplicationJSONDeployHooks](../models/createprojectlinkprojectsresponse200applicationjsondeployhooks.md)[] | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `gitCredentialId`                                                                                                                                      | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `updatedAt`                                                                                                                                            | *number*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `sourceless`                                                                                                                                           | *boolean*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `productionBranch`                                                                                                                                     | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |