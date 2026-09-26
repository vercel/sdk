# EightySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { EightySeven } from "@vercel/sdk/models/fiftytwo.js";

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

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `buildsEnabled`                                                            | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `configuration`                                                            | [models.PayloadConfiguration](../models/payloadconfiguration.md)           | :heavy_check_mark:                                                         | N/A                                                                        |
| `project`                                                                  | [models.UserEventPayload87Project](../models/usereventpayload87project.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `team`                                                                     | [models.UserEventPayload87Team](../models/usereventpayload87team.md)       | :heavy_check_mark:                                                         | N/A                                                                        |