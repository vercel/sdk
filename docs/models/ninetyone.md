# NinetyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyOne } from "@vercel/sdk/models/fiftyfour.js";

let value: NinetyOne = {
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
| `configuration`                                                                        | [models.UserEventPayload91Configuration](../models/usereventpayload91configuration.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `project`                                                                              | [models.UserEventPayload91Project](../models/usereventpayload91project.md)             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `team`                                                                                 | [models.UserEventPayloadTeam](../models/usereventpayloadteam.md)                       | :heavy_check_mark:                                                                     | N/A                                                                                    |