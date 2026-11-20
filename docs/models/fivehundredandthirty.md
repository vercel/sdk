# FiveHundredAndThirty

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndThirty } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndThirty = {
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
| `configuration`                                                                          | [models.UserEventPayload530Configuration](../models/usereventpayload530configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.PayloadPeering](../models/payloadpeering.md)                                     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload530Team](../models/usereventpayload530team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |