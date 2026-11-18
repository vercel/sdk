# FiveHundredAndTwentyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndTwentyFour } from "@vercel/sdk/models/usereventpayload499next.js";

let value: FiveHundredAndTwentyFour = {
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
| `configuration`                                                                          | [models.UserEventPayload524Configuration](../models/usereventpayload524configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.PayloadPeering](../models/payloadpeering.md)                                     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload524Team](../models/usereventpayload524team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |