# FiveHundredAndThirtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndThirtyFour } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndThirtyFour = {
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
| `configuration`                                                                          | [models.UserEventPayload534Configuration](../models/usereventpayload534configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.Peering](../models/peering.md)                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload534Team](../models/usereventpayload534team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |