# UserEventPayload323Project

## Example Usage

```typescript
import { UserEventPayload323Project } from "@vercel/sdk/models/threehundredandtwentythree.js";

let value: UserEventPayload323Project = {
  invitedUserName: "<value>",
  name: "<value>",
  role: "PROJECT_VIEWER",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `invitedUserId`                                                        | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `invitedUserName`                                                      | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `role`                                                                 | [models.UserEventPayload323Role](../models/usereventpayload323role.md) | :heavy_check_mark:                                                     | N/A                                                                    |