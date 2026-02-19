# Job7

## Example Usage

```typescript
import { Job7 } from "@vercel/sdk/models/userevent.js";

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

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                  | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `eventful`                                                                                   | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `headInfo`                                                                                   | [models.UserEventJobPayload2687HeadInfo](../models/usereventjobpayload2687headinfo.md)       | :heavy_check_mark:                                                                           | GitLab                                                                                       |
| `linkedProjectId`                                                                            | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `prId`                                                                                       | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `project`                                                                                    | [models.UserEventJobProject](../models/usereventjobproject.md)                               | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `projectId`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `customEnvId`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `ref`                                                                                        | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `sha`                                                                                        | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `type`                                                                                       | *"gitlab-now-comment"*                                                                       | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `gitComments`                                                                                | [models.UserEventJobPayload2687GitComments](../models/usereventjobpayload2687gitcomments.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `provider`                                                                                   | [models.UserEventJobPayload2687Provider](../models/usereventjobpayload2687provider.md)       | :heavy_check_mark:                                                                           | N/A                                                                                          |