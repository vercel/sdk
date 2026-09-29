# Job7

## Example Usage

```typescript
import { Job7 } from "@vercel/sdk/models/usereventjobaction.js";

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
  provider: "gitlab",
  ref: "<value>",
  sha: "<value>",
  type: "gitlab-now-comment",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                  | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `customEnvId`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `eventful`                                                                                   | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `gitComments`                                                                                | [models.UserEventJobPayload1127GitComments](../models/usereventjobpayload1127gitcomments.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `headInfo`                                                                                   | [models.UserEventJobPayload1127HeadInfo](../models/usereventjobpayload1127headinfo.md)       | :heavy_check_mark:                                                                           | GitLab                                                                                       |
| `linkedProjectId`                                                                            | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `prId`                                                                                       | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `project`                                                                                    | [models.UserEventJobProject](../models/usereventjobproject.md)                               | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `projectId`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `provider`                                                                                   | [models.UserEventJobPayload1127Provider](../models/usereventjobpayload1127provider.md)       | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `ref`                                                                                        | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `sha`                                                                                        | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `type`                                                                                       | *"gitlab-now-comment"*                                                                       | :heavy_check_mark:                                                                           | N/A                                                                                          |