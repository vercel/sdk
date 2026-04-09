# PayloadProjects

## Example Usage

```typescript
import { PayloadProjects } from "@vercel/sdk/models/usereventpayload163previous.js";

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
| `role`                                                                 | [models.UserEventPayload182Role](../models/usereventpayload182role.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `membershipCreatedAt`                                                  | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |