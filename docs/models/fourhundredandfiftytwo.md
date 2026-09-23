# FourHundredAndFiftyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftyTwo } from "@vercel/sdk/models/fourhundredandeleven.js";

let value: FourHundredAndFiftyTwo = {
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
| `configuration`                                                                          | [models.UserEventPayload452Configuration](../models/usereventpayload452configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.Peering](../models/peering.md)                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload452Team](../models/usereventpayload452team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |