# UserEventPayload307Project

## Example Usage

```typescript
import { UserEventPayload307Project } from "@vercel/sdk/models/twohundredandninetyfive.js";

let value: UserEventPayload307Project = {
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
| `role`                                                                 | [models.UserEventPayload307Role](../models/usereventpayload307role.md) | :heavy_check_mark:                                                     | N/A                                                                    |