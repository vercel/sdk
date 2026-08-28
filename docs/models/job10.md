# Job10

## Example Usage

```typescript
import { Job10 } from "@vercel/sdk/models/ninetyseven.js";

let value: Job10 = {
  headInfo: {
    owner: "<value>",
    ownerId: "<id>",
    ref: "<value>",
    repo: "<value>",
    repoId: "<id>",
    sha: "<value>",
  },
  installationId: "<id>",
  owner: "<value>",
  prId: 6654.62,
  projectId: "<id>",
  repo: "<value>",
  repoId: "<id>",
  type: "cursor-origin-now-comment",
  provider: "cursor-origin",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                    | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `eventful`                                                                                     | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `headInfo`                                                                                     | [models.UserEventJobPayload10210HeadInfo](../models/usereventjobpayload10210headinfo.md)       | :heavy_check_mark:                                                                             | Cursor Origin                                                                                  |
| `installationId`                                                                               | *string*                                                                                       | :heavy_check_mark:                                                                             | Origin installation id (`i_…`) used to resolve the credential.                                 |
| `linkedProjectId`                                                                              | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `owner`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `prId`                                                                                         | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `projectId`                                                                                    | *any*                                                                                          | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `customEnvId`                                                                                  | *any*                                                                                          | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `repo`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `repoId`                                                                                       | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `type`                                                                                         | *"cursor-origin-now-comment"*                                                                  | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `gitComments`                                                                                  | [models.UserEventJobPayload10210GitComments](../models/usereventjobpayload10210gitcomments.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `provider`                                                                                     | [models.UserEventJobPayload10210Provider](../models/usereventjobpayload10210provider.md)       | :heavy_check_mark:                                                                             | N/A                                                                                            |