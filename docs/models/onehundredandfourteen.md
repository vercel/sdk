# OneHundredAndFourteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFourteen } from "@vercel/sdk/models/payloadresources.js";

let value: OneHundredAndFourteen = {
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
| `configuration`                                                                          | [models.UserEventPayload114Configuration](../models/usereventpayload114configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `project`                                                                                | [models.UserEventPayload114Project](../models/usereventpayload114project.md)             | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayloadTeam](../models/usereventpayloadteam.md)                         | :heavy_check_mark:                                                                       | N/A                                                                                      |