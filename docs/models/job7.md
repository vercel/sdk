# Job7

## Example Usage

```typescript
import { Job7 } from "@vercel/sdk/models/usereventpayloadproject.js";

let value: Job7 = {
  headInfo: {
    project: {
      id: "<id>",
    },
    ref: "<value>",
    sha: "<value>",
  },
  prId: 4645.99,
  project: {
    id: "<id>",
  },
  ref: "<value>",
  sha: "<value>",
  type: "gitlab-now-comment",
  provider: "gitlab",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `eventful`                                                                                 | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `headInfo`                                                                                 | [models.UserEventJobPayload677HeadInfo](../models/usereventjobpayload677headinfo.md)       | :heavy_check_mark:                                                                         | GitLab                                                                                     |
| `linkedProjectId`                                                                          | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `prId`                                                                                     | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `project`                                                                                  | [models.UserEventJobProject](../models/usereventjobproject.md)                             | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `projectId`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `customEnvId`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `ref`                                                                                      | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `sha`                                                                                      | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `type`                                                                                     | *"gitlab-now-comment"*                                                                     | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `gitComments`                                                                              | [models.UserEventJobPayload677GitComments](../models/usereventjobpayload677gitcomments.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `provider`                                                                                 | [models.UserEventJobPayload677Provider](../models/usereventjobpayload677provider.md)       | :heavy_check_mark:                                                                         | N/A                                                                                        |