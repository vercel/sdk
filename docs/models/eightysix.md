# EightySix

The payload of the event, if requested.

## Example Usage

```typescript
import { EightySix } from "@vercel/sdk/models/thirty.js";

let value: EightySix = {
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
| `configuration`                                                                        | [models.UserEventPayload86Configuration](../models/usereventpayload86configuration.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `project`                                                                              | [models.UserEventPayload86Project](../models/usereventpayload86project.md)             | :heavy_check_mark:                                                                     | N/A                                                                                    |