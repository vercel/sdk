# ProjectMembership

## Example Usage

```typescript
import { ProjectMembership } from "@vercel/sdk/models/twohundredandseventyone.js";

let value: ProjectMembership = {
  createdAt: 32.99,
  role: "PROJECT_VIEWER",
  uid: "<id>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `createdAt`                                                            | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `role`                                                                 | [models.UserEventPayload289Role](../models/usereventpayload289role.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `uid`                                                                  | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `username`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |