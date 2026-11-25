# ThreeHundredAndFiftyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyOne } from "@vercel/sdk/models/usereventpayload328previous.js";

let value: ThreeHundredAndFiftyOne = {
  projects: [],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `directoryType`                                          | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `projects`                                               | [models.PayloadProjects](../models/payloadprojects.md)[] | :heavy_check_mark:                                       | N/A                                                      |
| `teamMembership`                                         | [models.TeamMembership](../models/teammembership.md)     | :heavy_minus_sign:                                       | N/A                                                      |