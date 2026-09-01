# EightyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyFour } from "@vercel/sdk/models/piiredaction.js";

let value: EightyFour = {
  team: {
    name: "<value>",
    id: "<id>",
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
| `configuration`                                                                        | [models.UserEventPayload84Configuration](../models/usereventpayload84configuration.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `project`                                                                              | [models.UserEventPayload84Project](../models/usereventpayload84project.md)             | :heavy_check_mark:                                                                     | N/A                                                                                    |