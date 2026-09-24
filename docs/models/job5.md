# Job5

## Example Usage

```typescript
import { Job5 } from "@vercel/sdk/models/usereventjobaction.js";

let value: Job5 = {
  headInfo: {
    org: "<value>",
    ref: "<value>",
    repo: "<value>",
    repoId: 1102.65,
    sha: "<value>",
  },
  installationId: 4535.07,
  isPrivate: true,
  org: "<value>",
  prId: 338.22,
  projectId: "<id>",
  provider: "github",
  repo: "<value>",
  repoId: 599.5,
  type: "now-comment",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `beforeSha`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `createdAt`                                                                                | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `customEnvId`                                                                              | *any*                                                                                      | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `customHost`                                                                               | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `eventful`                                                                                 | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `gitComments`                                                                              | [models.UserEventJobPayload109GitComments](../models/usereventjobpayload109gitcomments.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `headInfo`                                                                                 | [models.UserEventJobPayload109HeadInfo](../models/usereventjobpayload109headinfo.md)       | :heavy_check_mark:                                                                         | Information about the head commit/branch for a GitHub repository                           |
| `installationId`                                                                           | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `isPrivate`                                                                                | *boolean*                                                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `linkedProjectId`                                                                          | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `org`                                                                                      | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `prId`                                                                                     | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `projectId`                                                                                | *any*                                                                                      | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `provider`                                                                                 | [models.UserEventJobPayload1095Provider](../models/usereventjobpayload1095provider.md)     | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `repo`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `repoId`                                                                                   | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `type`                                                                                     | *"now-comment"*                                                                            | :heavy_check_mark:                                                                         | N/A                                                                                        |