# OneHundredAndSeventyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventyNine } from "@vercel/sdk/models/usereventpayload161next.js";

let value: OneHundredAndSeventyNine = {
  projects: [
    {
      projectId: "<id>",
      role: "PROJECT_GUEST",
      membershipCreatedAt: 5975.39,
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