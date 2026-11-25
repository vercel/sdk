# FiveHundredAndThirtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndThirtyNine } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndThirtyNine = {
  configuration: {
    id: "<id>",
  },
  peering: {
    id: "<id>",
  },
  team: {
    id: "<id>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `configuration`                                                                          | [models.UserEventPayload539Configuration](../models/usereventpayload539configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.PayloadPeering](../models/payloadpeering.md)                                     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload539Team](../models/usereventpayload539team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |