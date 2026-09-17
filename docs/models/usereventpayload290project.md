# UserEventPayload290Project

## Example Usage

```typescript
import { UserEventPayload290Project } from "@vercel/sdk/models/twohundredandseventyone.js";

let value: UserEventPayload290Project = {
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
| `role`                                                                 | [models.UserEventPayload290Role](../models/usereventpayload290role.md) | :heavy_check_mark:                                                     | N/A                                                                    |