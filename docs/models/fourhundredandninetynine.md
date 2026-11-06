# FourHundredAndNinetyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNinetyNine } from "@vercel/sdk/models/usereventpayload465actortype.js";

let value: FourHundredAndNinetyNine = {
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
| `configuration`                                                                          | [models.UserEventPayload499Configuration](../models/usereventpayload499configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.PayloadPeering](../models/payloadpeering.md)                                     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload499Team](../models/usereventpayload499team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |