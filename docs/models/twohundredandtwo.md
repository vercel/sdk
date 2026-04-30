# TwoHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwo } from "@vercel/sdk/models/microfrontends2.js";

let value: TwoHundredAndTwo = {
  projects: [],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `projects`                                               | [models.PayloadProjects](../models/payloadprojects.md)[] | :heavy_check_mark:                                       | N/A                                                      |
| `teamMembership`                                         | [models.TeamMembership](../models/teammembership.md)     | :heavy_minus_sign:                                       | N/A                                                      |
| `directoryType`                                          | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |