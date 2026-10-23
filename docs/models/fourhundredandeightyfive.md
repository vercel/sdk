# FourHundredAndEightyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEightyFive } from "@vercel/sdk/models/fourhundredandfortynine.js";

let value: FourHundredAndEightyFive = {
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
| `configuration`                                                                          | [models.UserEventPayload485Configuration](../models/usereventpayload485configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.Peering](../models/peering.md)                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload485Team](../models/usereventpayload485team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |