# EightyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyOne } from "@vercel/sdk/models/payloadscopetype.js";

let value: EightyOne = {
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

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `team`                                                                     | [models.UserEventPayload81Team](../models/usereventpayload81team.md)       | :heavy_check_mark:                                                         | N/A                                                                        |
| `configuration`                                                            | [models.PayloadConfiguration](../models/payloadconfiguration.md)           | :heavy_check_mark:                                                         | N/A                                                                        |
| `project`                                                                  | [models.UserEventPayload81Project](../models/usereventpayload81project.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `buildsEnabled`                                                            | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |