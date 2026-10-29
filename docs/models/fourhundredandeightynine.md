# FourHundredAndEightyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEightyNine } from "@vercel/sdk/models/usereventpayload453actortype.js";

let value: FourHundredAndEightyNine = {
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
| `configuration`                                                                          | [models.UserEventPayload489Configuration](../models/usereventpayload489configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.PayloadPeering](../models/payloadpeering.md)                                     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload489Team](../models/usereventpayload489team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |