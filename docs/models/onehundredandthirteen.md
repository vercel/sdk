# OneHundredAndThirteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirteen } from "@vercel/sdk/models/payloadresources.js";

let value: OneHundredAndThirteen = {
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
| `project`                                                                          | [models.UserEventPayload113Project](../models/usereventpayload113project.md)       | :heavy_check_mark:                                                                 | N/A                                                                                |
| `team`                                                                             | [models.PayloadTeam](../models/payloadteam.md)                                     | :heavy_check_mark:                                                                 | N/A                                                                                |