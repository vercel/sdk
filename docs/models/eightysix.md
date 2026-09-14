# EightySix

The payload of the event, if requested.

## Example Usage

```typescript
import { EightySix } from "@vercel/sdk/models/thirtythree.js";

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

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `team`                                                                             | [models.PayloadTeam](../models/payloadteam.md)                                     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `configuration`                                                                    | [models.UserEventPayloadConfiguration](../models/usereventpayloadconfiguration.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `project`                                                                          | [models.UserEventPayload86Project](../models/usereventpayload86project.md)         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `buildsEnabled`                                                                    | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `passive`                                                                          | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |