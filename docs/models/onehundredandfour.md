# OneHundredAndFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFour } from "@vercel/sdk/models/eightynine.js";

let value: OneHundredAndFour = {
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
| `configuration`                                                                          | [models.UserEventPayload104Configuration](../models/usereventpayload104configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `project`                                                                                | [models.UserEventPayload104Project](../models/usereventpayload104project.md)             | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayloadTeam](../models/usereventpayloadteam.md)                         | :heavy_check_mark:                                                                       | N/A                                                                                      |