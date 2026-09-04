# UserEventJobPayload1047HeadInfo

GitLab

## Example Usage

```typescript
import { UserEventJobPayload1047HeadInfo } from "@vercel/sdk/models/deployhook.js";

let value: UserEventJobPayload1047HeadInfo = {
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