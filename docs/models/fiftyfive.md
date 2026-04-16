# FiftyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyFive } from "@vercel/sdk/models/fiftyfour.js";

let value: FiftyFive = {
  team: {
    id: "<id>",
    name: "<value>",
  },
  configuration: {
    id: "<id>",
  },
  project: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `team`                                                                                 | [models.UserEventPayloadTeam](../models/usereventpayloadteam.md)                       | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `configuration`                                                                        | [models.UserEventPayload55Configuration](../models/usereventpayload55configuration.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `project`                                                                              | [models.UserEventPayload55Project](../models/usereventpayload55project.md)             | :heavy_check_mark:                                                                     | N/A                                                                                    |