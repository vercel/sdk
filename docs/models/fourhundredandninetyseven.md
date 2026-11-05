# FourHundredAndNinetySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNinetySeven } from "@vercel/sdk/models/usereventpayload464actortype.js";

let value: FourHundredAndNinetySeven = {
  configuration: {
    id: "<id>",
  },
  peering: {
    accountId: "<id>",
    id: "<id>",
    region: "<value>",
    vpcId: "<id>",
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
| `configuration`                                                                          | [models.UserEventPayload497Configuration](../models/usereventpayload497configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.Peering](../models/peering.md)                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload497Team](../models/usereventpayload497team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |