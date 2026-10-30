# FourHundredAndNinetyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNinetyFive } from "@vercel/sdk/models/usereventpayload458actortype.js";

let value: FourHundredAndNinetyFive = {
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
| `configuration`                                                                          | [models.UserEventPayload495Configuration](../models/usereventpayload495configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `newName`                                                                                | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.UserEventPayloadPeering](../models/usereventpayloadpeering.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload495Team](../models/usereventpayload495team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |