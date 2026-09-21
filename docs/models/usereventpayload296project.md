# UserEventPayload296Project

## Example Usage

```typescript
import { UserEventPayload296Project } from "@vercel/sdk/models/twohundredandeightyone.js";

let value: UserEventPayload296Project = {
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
| `role`                                                                 | [models.UserEventPayload296Role](../models/usereventpayload296role.md) | :heavy_check_mark:                                                     | N/A                                                                    |