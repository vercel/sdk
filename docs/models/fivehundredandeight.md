# FiveHundredAndEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndEight } from "@vercel/sdk/models/usereventpayload474actortype.js";

let value: FiveHundredAndEight = {
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
| `configuration`                                                                          | [models.UserEventPayload508Configuration](../models/usereventpayload508configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.PayloadPeering](../models/payloadpeering.md)                                     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload508Team](../models/usereventpayload508team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |