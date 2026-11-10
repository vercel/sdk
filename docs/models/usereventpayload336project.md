# UserEventPayload336Project

## Example Usage

```typescript
import { UserEventPayload336Project } from "@vercel/sdk/models/payloadcurrent.js";

let value: UserEventPayload336Project = {
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
| `role`                                                                 | [models.UserEventPayload336Role](../models/usereventpayload336role.md) | :heavy_check_mark:                                                     | N/A                                                                    |