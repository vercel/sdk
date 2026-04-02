# OneHundredAndEighty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEighty } from "@vercel/sdk/models/usereventpayload162next.js";

let value: OneHundredAndEighty = {
  projects: [
    {
      projectId: "<id>",
      role: "PROJECT_VIEWER",
      membershipCreatedAt: 2107.64,
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