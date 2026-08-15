# Job10

## Example Usage

```typescript
import { Job10 } from "@vercel/sdk/models/usereventpayload80configuration.js";

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

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                  | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `eventful`                                                                                   | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `headInfo`                                                                                   | [models.UserEventJobPayload9910HeadInfo](../models/usereventjobpayload9910headinfo.md)       | :heavy_check_mark:                                                                           | Cursor Origin                                                                                |
| `installationId`                                                                             | *string*                                                                                     | :heavy_check_mark:                                                                           | Origin installation id (`i_…`) used to resolve the credential.                               |
| `linkedProjectId`                                                                            | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `owner`                                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `prId`                                                                                       | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `projectId`                                                                                  | *any*                                                                                        | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `customEnvId`                                                                                | *any*                                                                                        | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `repo`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `repoId`                                                                                     | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `type`                                                                                       | *"cursor-origin-now-comment"*                                                                | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `gitComments`                                                                                | [models.UserEventJobPayload9910GitComments](../models/usereventjobpayload9910gitcomments.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `provider`                                                                                   | [models.UserEventJobPayload9910Provider](../models/usereventjobpayload9910provider.md)       | :heavy_check_mark:                                                                           | N/A                                                                                          |