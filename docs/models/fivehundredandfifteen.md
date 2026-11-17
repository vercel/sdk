# FiveHundredAndFifteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFifteen } from "@vercel/sdk/models/usereventpayload491previous.js";

let value: FiveHundredAndFifteen = {
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
| `configuration`                                                                          | [models.UserEventPayload515Configuration](../models/usereventpayload515configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.PayloadPeering](../models/payloadpeering.md)                                     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload515Team](../models/usereventpayload515team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |