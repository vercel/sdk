# UserEventPayload319Project

## Example Usage

```typescript
import { UserEventPayload319Project } from "@vercel/sdk/models/threehundredandseventeen.js";

let value: UserEventPayload319Project = {
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
| `role`                                                                 | [models.UserEventPayload319Role](../models/usereventpayload319role.md) | :heavy_check_mark:                                                     | N/A                                                                    |