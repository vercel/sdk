# EightyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyNine } from "@vercel/sdk/models/fiftyfour.js";

let value: EightyNine = {
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

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `buildsEnabled`                                                            | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `configuration`                                                            | [models.PayloadConfiguration](../models/payloadconfiguration.md)           | :heavy_check_mark:                                                         | N/A                                                                        |
| `project`                                                                  | [models.UserEventPayload89Project](../models/usereventpayload89project.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `team`                                                                     | [models.UserEventPayload89Team](../models/usereventpayload89team.md)       | :heavy_check_mark:                                                         | N/A                                                                        |