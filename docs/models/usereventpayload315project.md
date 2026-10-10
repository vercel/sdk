# UserEventPayload315Project

## Example Usage

```typescript
import { UserEventPayload315Project } from "@vercel/sdk/models/threehundredandeight.js";

let value: UserEventPayload315Project = {
  invitedUserName: "<value>",
  name: "<value>",
  role: "PROJECT_DEVELOPER",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `invitedUserId`                                                        | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `invitedUserName`                                                      | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `role`                                                                 | [models.UserEventPayload315Role](../models/usereventpayload315role.md) | :heavy_check_mark:                                                     | N/A                                                                    |