# Job2

Represents the payload for a Bitbucket comment job This interface defines the structure of data needed when creating a job to handle comments on Bitbucket pull requests or commits.

## Example Usage

```typescript
import { Job2 } from "@vercel/sdk/models/userevent.js";

let value: Job2 = {
  headInfo: {
    owner: "<value>",
    ref: "<value>",
    repoUuid: "<id>",
    sha: "<value>",
    slug: "<value>",
  },
  name: "<value>",
  owner: "<value>",
  prId: 2753.27,
  ref: "<value>",
  repoUuid: "<id>",
  sha: "<value>",
  slug: "<value>",
  type: "bitbucket-now-comment",
  workspaceUuid: "<id>",
  provider: "bitbucket",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `createdAt`                                                      | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `eventful`                                                       | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `headInfo`                                                       | [models.JobHeadInfo](../models/jobheadinfo.md)                   | :heavy_check_mark:                                               | N/A                                                              |
| `linkedProjectId`                                                | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `owner`                                                          | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `prId`                                                           | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `projectId`                                                      | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `customEnvId`                                                    | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `ref`                                                            | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `repoUuid`                                                       | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `sha`                                                            | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `slug`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `type`                                                           | *"bitbucket-now-comment"*                                        | :heavy_check_mark:                                               | N/A                                                              |
| `workspaceUuid`                                                  | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `gitComments`                                                    | [models.JobGitComments](../models/jobgitcomments.md)             | :heavy_minus_sign:                                               | N/A                                                              |
| `provider`                                                       | [models.UserEventJobProvider](../models/usereventjobprovider.md) | :heavy_check_mark:                                               | N/A                                                              |