# SeventyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyNine } from "@vercel/sdk/models/sixty.js";

let value: SeventyNine = {
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
| `configuration`                                                                        | [models.UserEventPayload79Configuration](../models/usereventpayload79configuration.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `project`                                                                              | [models.UserEventPayload79Project](../models/usereventpayload79project.md)             | :heavy_check_mark:                                                                     | N/A                                                                                    |