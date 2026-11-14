# UserEventPayload340Project

## Example Usage

```typescript
import { UserEventPayload340Project } from "@vercel/sdk/models/twohundredandninetynine.js";

let value: UserEventPayload340Project = {
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
| `role`                                                                 | [models.UserEventPayload340Role](../models/usereventpayload340role.md) | :heavy_check_mark:                                                     | N/A                                                                    |