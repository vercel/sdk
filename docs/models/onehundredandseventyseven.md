# OneHundredAndSeventySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventySeven } from "@vercel/sdk/models/usereventpayload159next.js";

let value: OneHundredAndSeventySeven = {
  projects: [
    {
      projectId: "<id>",
      role: "PROJECT_GUEST",
      membershipCreatedAt: 5492.3,
    },
  ],
  uid: "<id>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `projects`                                               | [models.PayloadProjects](../models/payloadprojects.md)[] | :heavy_check_mark:                                       | N/A                                                      |
| `uid`                                                    | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |