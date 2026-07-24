# SeventyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyThree } from "@vercel/sdk/models/twentythree.js";

let value: SeventyThree = {
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
| `team`                                                                     | [models.UserEventPayload73Team](../models/usereventpayload73team.md)       | :heavy_check_mark:                                                         | N/A                                                                        |
| `configuration`                                                            | [models.PayloadConfiguration](../models/payloadconfiguration.md)           | :heavy_check_mark:                                                         | N/A                                                                        |
| `project`                                                                  | [models.UserEventPayload73Project](../models/usereventpayload73project.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `buildsEnabled`                                                            | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |