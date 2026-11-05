# UserEventPayload329Project

## Example Usage

```typescript
import { UserEventPayload329Project } from "@vercel/sdk/models/twohundredandseventytwo.js";

let value: UserEventPayload329Project = {
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
| `role`                                                                 | [models.UserEventPayload329Role](../models/usereventpayload329role.md) | :heavy_check_mark:                                                     | N/A                                                                    |