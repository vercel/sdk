# FiveHundredAndThirtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndThirtyFive } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndThirtyFive = {
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
| `configuration`                                                                          | [models.UserEventPayload535Configuration](../models/usereventpayload535configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `newName`                                                                                | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.UserEventPayloadPeering](../models/usereventpayloadpeering.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload535Team](../models/usereventpayload535team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |