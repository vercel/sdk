# FiveHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndTwo } from "@vercel/sdk/models/usereventpayload469actortype.js";

let value: FiveHundredAndTwo = {
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
| `configuration`                                                                          | [models.UserEventPayload502Configuration](../models/usereventpayload502configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.Peering](../models/peering.md)                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload502Team](../models/usereventpayload502team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |