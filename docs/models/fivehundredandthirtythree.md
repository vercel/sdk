# FiveHundredAndThirtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndThirtyThree } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndThirtyThree = {
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
| `configuration`                                                                          | [models.UserEventPayload533Configuration](../models/usereventpayload533configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.Peering](../models/peering.md)                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload533Team](../models/usereventpayload533team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |