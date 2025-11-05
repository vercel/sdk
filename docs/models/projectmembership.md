# ProjectMembership

## Example Usage

```typescript
import { ProjectMembership } from "@vercel/sdk/models/userevent.js";

let value: ProjectMembership = {
  role: "ADMIN",
  uid: "<id>",
  createdAt: 8841.78,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `role`                                                           | [models.UserEventPayloadRole](../models/usereventpayloadrole.md) | :heavy_check_mark:                                               | N/A                                                              |
| `uid`                                                            | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `createdAt`                                                      | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `username`                                                       | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |