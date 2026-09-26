# PayloadProjects

## Example Usage

```typescript
import { PayloadProjects } from "@vercel/sdk/models/twohundredandeightythree.js";

let value: PayloadProjects = {
  membershipCreatedAt: 3091.91,
  projectId: "<id>",
  role: "PROJECT_DEVELOPER",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `membershipCreatedAt`                                            | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `projectId`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `role`                                                           | [models.UserEventPayloadRole](../models/usereventpayloadrole.md) | :heavy_check_mark:                                               | N/A                                                              |