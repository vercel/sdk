# ProjectMembership

## Example Usage

```typescript
import { ProjectMembership } from "@vercel/sdk/models/threehundredandfourteen.js";

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
| `role`                                                                 | [models.UserEventPayload315Role](../models/usereventpayload315role.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `uid`                                                                  | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `username`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |