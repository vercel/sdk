# FourHundredAndSeventySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeventySeven } from "@vercel/sdk/models/fourhundredandthirtysix.js";

let value: FourHundredAndSeventySeven = {
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
| `configuration`                                                                          | [models.UserEventPayload477Configuration](../models/usereventpayload477configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.PayloadPeering](../models/payloadpeering.md)                                     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload477Team](../models/usereventpayload477team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |