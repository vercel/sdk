# UserEventPayload313Project

## Example Usage

```typescript
import { UserEventPayload313Project } from "@vercel/sdk/models/threehundredandone.js";

let value: UserEventPayload313Project = {
  invitedUserName: "<value>",
  name: "<value>",
  role: "PROJECT_GUEST",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `invitedUserId`                                                        | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `invitedUserName`                                                      | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `role`                                                                 | [models.UserEventPayload313Role](../models/usereventpayload313role.md) | :heavy_check_mark:                                                     | N/A                                                                    |