# SeventyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyEight } from "@vercel/sdk/models/payloadresources.js";

let value: SeventyEight = {
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
| `configuration`                                                                        | [models.UserEventPayload78Configuration](../models/usereventpayload78configuration.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `project`                                                                              | [models.UserEventPayload78Project](../models/usereventpayload78project.md)             | :heavy_check_mark:                                                                     | N/A                                                                                    |