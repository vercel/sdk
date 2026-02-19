# Job5

## Example Usage

```typescript
import { Job5 } from "@vercel/sdk/models/userevent.js";

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
  repo: "<value>",
  repoId: 897.64,
  type: "now-comment",
  provider: "github",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `eventful`                                                                                 | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `headInfo`                                                                                 | [models.UserEventJobPayload268HeadInfo](../models/usereventjobpayload268headinfo.md)       | :heavy_check_mark:                                                                         | Information about the head commit/branch for a GitHub repository                           |
| `beforeSha`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `installationId`                                                                           | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `isPrivate`                                                                                | *boolean*                                                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `linkedProjectId`                                                                          | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `org`                                                                                      | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `prId`                                                                                     | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `projectId`                                                                                | *any*                                                                                      | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `customEnvId`                                                                              | *any*                                                                                      | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `repo`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `repoId`                                                                                   | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `type`                                                                                     | *"now-comment"*                                                                            | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `gitComments`                                                                              | [models.UserEventJobPayload268GitComments](../models/usereventjobpayload268gitcomments.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `provider`                                                                                 | [models.UserEventJobPayload2685Provider](../models/usereventjobpayload2685provider.md)     | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `customHost`                                                                               | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |