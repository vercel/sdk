# UserEventPayload355Project

## Example Usage

```typescript
import { UserEventPayload355Project } from "@vercel/sdk/models/threehundredandtwentyfive.js";

let value: UserEventPayload355Project = {
  invitedUserName: "<value>",
  name: "<value>",
  role: "ADMIN",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `invitedUserId`                                                        | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `invitedUserName`                                                      | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `role`                                                                 | [models.UserEventPayload355Role](../models/usereventpayload355role.md) | :heavy_check_mark:                                                     | N/A                                                                    |