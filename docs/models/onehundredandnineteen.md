# OneHundredAndNineteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNineteen } from "@vercel/sdk/models/eightythree.js";

let value: OneHundredAndNineteen = {
  configuration: {
    id: "<id>",
  },
  project: {
    id: "<id>",
  },
  team: {
    id: "<id>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `configuration`                                                                          | [models.UserEventPayload119Configuration](../models/usereventpayload119configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `project`                                                                                | [models.UserEventPayload119Project](../models/usereventpayload119project.md)             | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayloadTeam](../models/usereventpayloadteam.md)                         | :heavy_check_mark:                                                                       | N/A                                                                                      |