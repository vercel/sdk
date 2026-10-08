# UserEventJobPayload1207HeadInfo

GitLab

## Example Usage

```typescript
import { UserEventJobPayload1207HeadInfo } from "@vercel/sdk/models/usereventjobaction.js";

let value: UserEventJobPayload1207HeadInfo = {
  project: {
    id: "<id>",
  },
  ref: "<value>",
  sha: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventJobPayloadProject](../models/usereventjobpayloadproject.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `ref`                                                                        | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `sha`                                                                        | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |