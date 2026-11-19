# UserEventPayload347Project

## Example Usage

```typescript
import { UserEventPayload347Project } from "@vercel/sdk/models/threehundredandfifteen.js";

let value: UserEventPayload347Project = {
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
| `role`                                                                 | [models.UserEventPayload347Role](../models/usereventpayload347role.md) | :heavy_check_mark:                                                     | N/A                                                                    |