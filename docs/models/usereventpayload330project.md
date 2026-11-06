# UserEventPayload330Project

## Example Usage

```typescript
import { UserEventPayload330Project } from "@vercel/sdk/models/twohundredandseventythree.js";

let value: UserEventPayload330Project = {
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
| `role`                                                                 | [models.UserEventPayload330Role](../models/usereventpayload330role.md) | :heavy_check_mark:                                                     | N/A                                                                    |