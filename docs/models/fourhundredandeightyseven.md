# FourHundredAndEightySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEightySeven } from "@vercel/sdk/models/fourhundredandfifty.js";

let value: FourHundredAndEightySeven = {
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
| `configuration`                                                                          | [models.UserEventPayload487Configuration](../models/usereventpayload487configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.PayloadPeering](../models/payloadpeering.md)                                     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload487Team](../models/usereventpayload487team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |