# FourHundredAndNinetyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNinetyFour } from "@vercel/sdk/models/usereventpayload459actortype.js";

let value: FourHundredAndNinetyFour = {
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
| `configuration`                                                                          | [models.UserEventPayload494Configuration](../models/usereventpayload494configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.Peering](../models/peering.md)                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload494Team](../models/usereventpayload494team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |