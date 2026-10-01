# NinetyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyFour } from "@vercel/sdk/models/nextscopes.js";

let value: NinetyFour = {
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
| `configuration`                                                                        | [models.UserEventPayload94Configuration](../models/usereventpayload94configuration.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `project`                                                                              | [models.UserEventPayload94Project](../models/usereventpayload94project.md)             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `team`                                                                                 | [models.UserEventPayloadTeam](../models/usereventpayloadteam.md)                       | :heavy_check_mark:                                                                     | N/A                                                                                    |