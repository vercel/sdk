# GetAuthUserResponseBody

Successful response.

## Example Usage

```typescript
import { GetAuthUserResponseBody } from "@vercel/sdk/models/getauthuserop.js";

let value: GetAuthUserResponseBody = {
  user: {
    createdAt: 1630748523395,
    softBlock: {
      blockedAt: 3863.42,
      reason: "ENTERPRISE_TRIAL_ENDED",
    },
    billing: {},
    resourceConfig: {},
    stagingPrefix: "<value>",
    hasTrialAvailable: true,
    id: "AEIIDYVk59zbFF2Sxfyxxmua",
    email: "me@example.com",
    name: "John Doe",
    username: "jdoe",
    avatar: "22cb30c85ff45ac4c72de8981500006b28114aa1",
    defaultTeamId: "<id>",
  },
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `user`                   | *models.GetAuthUserUser* | :heavy_check_mark:       | N/A                      |