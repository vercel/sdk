# TwoHundredAndEightySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightySix } from "@vercel/sdk/models/usereventpayloadgitprovider.js";

let value: TwoHundredAndEightySix = {
  projects: [
    {
      membershipCreatedAt: 5063.8,
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