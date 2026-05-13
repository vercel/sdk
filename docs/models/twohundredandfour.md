# TwoHundredAndFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFour } from "@vercel/sdk/models/usereventpayloadorigin.js";

let value: TwoHundredAndFour = {
  projects: [
    {
      projectId: "<id>",
      role: "PROJECT_DEVELOPER",
      membershipCreatedAt: 3803.82,
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `projects`                                               | [models.PayloadProjects](../models/payloadprojects.md)[] | :heavy_check_mark:                                       | N/A                                                      |
| `teamMembership`                                         | [models.TeamMembership](../models/teammembership.md)     | :heavy_minus_sign:                                       | N/A                                                      |
| `directoryType`                                          | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |