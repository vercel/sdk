# PayloadProjects

## Example Usage

```typescript
import { PayloadProjects } from "@vercel/sdk/models/twohundredandseven.js";

let value: PayloadProjects = {
  projectId: "<id>",
  role: "PROJECT_DEVELOPER",
  membershipCreatedAt: 3432.97,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `projectId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `role`                                                                 | [models.UserEventPayload252Role](../models/usereventpayload252role.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `membershipCreatedAt`                                                  | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |