# EightyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyEight } from "@vercel/sdk/models/fiftytwo.js";

let value: EightyEight = {
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

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `buildsEnabled`                                                                    | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `configuration`                                                                    | [models.UserEventPayloadConfiguration](../models/usereventpayloadconfiguration.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `passive`                                                                          | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `project`                                                                          | [models.UserEventPayload88Project](../models/usereventpayload88project.md)         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `team`                                                                             | [models.PayloadTeam](../models/payloadteam.md)                                     | :heavy_check_mark:                                                                 | N/A                                                                                |