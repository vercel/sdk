# UserEventPayload339Project

## Example Usage

```typescript
import { UserEventPayload339Project } from "@vercel/sdk/models/usereventpayloadprivatelinkendpoint.js";

let value: UserEventPayload339Project = {
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
| `role`                                                                 | [models.UserEventPayload339Role](../models/usereventpayload339role.md) | :heavy_check_mark:                                                     | N/A                                                                    |