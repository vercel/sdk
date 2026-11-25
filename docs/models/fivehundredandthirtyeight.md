# FiveHundredAndThirtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndThirtyEight } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndThirtyEight = {
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
| `configuration`                                                                          | [models.UserEventPayload538Configuration](../models/usereventpayload538configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.Peering](../models/peering.md)                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload538Team](../models/usereventpayload538team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |