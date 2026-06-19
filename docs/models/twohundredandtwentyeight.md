# TwoHundredAndTwentyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyEight } from "@vercel/sdk/models/removedusers.js";

let value: TwoHundredAndTwentyEight = {
  projects: [
    {
      projectId: "<id>",
      role: "PROJECT_GUEST",
      membershipCreatedAt: 8119.34,
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