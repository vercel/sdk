# ThreeHundredAndFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFour } from "@vercel/sdk/models/twohundredandninetyfive.js";

let value: ThreeHundredAndFour = {
  projects: [
    {
      membershipCreatedAt: 3369.23,
      projectId: "<id>",
      role: "PROJECT_GUEST",
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `directoryType`                                          | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `projects`                                               | [models.PayloadProjects](../models/payloadprojects.md)[] | :heavy_check_mark:                                       | N/A                                                      |
| `teamMembership`                                         | [models.TeamMembership](../models/teammembership.md)     | :heavy_minus_sign:                                       | N/A                                                      |