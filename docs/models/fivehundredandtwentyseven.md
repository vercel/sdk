# FiveHundredAndTwentySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndTwentySeven } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndTwentySeven = {
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
| `configuration`                                                                          | [models.UserEventPayload527Configuration](../models/usereventpayload527configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.Peering](../models/peering.md)                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload527Team](../models/usereventpayload527team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |