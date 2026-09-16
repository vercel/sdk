# GetAuthUserResponseBody

Successful response.

## Example Usage

```typescript
import { GetAuthUserResponseBody } from "@vercel/sdk/models/getauthuserop.js";

let value: GetAuthUserResponseBody = {
  user: {
    avatar: "22cb30c85ff45ac4c72de8981500006b28114aa1",
    billing: {},
    createdAt: 1630748523395,
    defaultTeamId: "<id>",
    email: "me@example.com",
    hasTrialAvailable: true,
    id: "AEIIDYVk59zbFF2Sxfyxxmua",
    name: "John Doe",
    resourceConfig: {},
    softBlock: {
      blockedAt: 2025.27,
      reason: "DOMAIN_OWNER_DELETION_REQUEST",
    },
    stagingPrefix: "<value>",
    username: "jdoe",
  },
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `user`                   | *models.GetAuthUserUser* | :heavy_check_mark:       | N/A                      |