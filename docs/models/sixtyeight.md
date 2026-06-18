# SixtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyEight } from "@vercel/sdk/models/usereventpayload54action.js";

let value: SixtyEight = {
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

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `team`                                                                             | [models.PayloadTeam](../models/payloadteam.md)                                     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `configuration`                                                                    | [models.UserEventPayloadConfiguration](../models/usereventpayloadconfiguration.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `project`                                                                          | [models.UserEventPayload68Project](../models/usereventpayload68project.md)         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `buildsEnabled`                                                                    | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `passive`                                                                          | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |