# TwoHundredAndThirtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtySix } from "@vercel/sdk/models/onehundredandeightythree.js";

let value: TwoHundredAndThirtySix = {
  projects: [
    {
      projectId: "<id>",
      role: "ADMIN",
      membershipCreatedAt: 6832.99,
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