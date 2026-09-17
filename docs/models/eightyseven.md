# EightySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { EightySeven } from "@vercel/sdk/models/retention.js";

let value: EightySeven = {
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

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `configuration`                                                                        | [models.UserEventPayload87Configuration](../models/usereventpayload87configuration.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `project`                                                                              | [models.UserEventPayload87Project](../models/usereventpayload87project.md)             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `team`                                                                                 | [models.UserEventPayloadTeam](../models/usereventpayloadteam.md)                       | :heavy_check_mark:                                                                     | N/A                                                                                    |