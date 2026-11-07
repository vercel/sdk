# FiveHundredAndThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndThree } from "@vercel/sdk/models/usereventpayload469actortype.js";

let value: FiveHundredAndThree = {
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
| `configuration`                                                                          | [models.UserEventPayload503Configuration](../models/usereventpayload503configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.PayloadPeering](../models/payloadpeering.md)                                     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload503Team](../models/usereventpayload503team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |