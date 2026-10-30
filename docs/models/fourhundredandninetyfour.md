# FourHundredAndNinetyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNinetyFour } from "@vercel/sdk/models/usereventpayload458actortype.js";

let value: FourHundredAndNinetyFour = {
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
| `configuration`                                                                          | [models.UserEventPayload494Configuration](../models/usereventpayload494configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.PayloadPeering](../models/payloadpeering.md)                                     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload494Team](../models/usereventpayload494team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |