# UserEventPayload300Project

## Example Usage

```typescript
import { UserEventPayload300Project } from "@vercel/sdk/models/twohundredandeightyfour.js";

let value: UserEventPayload300Project = {
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
| `role`                                                                 | [models.UserEventPayload300Role](../models/usereventpayload300role.md) | :heavy_check_mark:                                                     | N/A                                                                    |