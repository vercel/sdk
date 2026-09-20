# TwoHundredAndNinetyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetyThree } from "@vercel/sdk/models/twohundredandeightyone.js";

let value: TwoHundredAndNinetyThree = {
  projects: [
    {
      membershipCreatedAt: 9432.62,
      projectId: "<id>",
      role: "PROJECT_VIEWER",
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