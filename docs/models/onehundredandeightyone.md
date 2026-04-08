# OneHundredAndEightyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightyOne } from "@vercel/sdk/models/usereventpayload162previous.js";

let value: OneHundredAndEightyOne = {
  projects: [
    {
      projectId: "<id>",
      role: "ADMIN",
      membershipCreatedAt: 4.75,
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