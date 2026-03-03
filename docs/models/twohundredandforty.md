# TwoHundredAndForty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndForty } from "@vercel/sdk/models/userevent.js";

let value: TwoHundredAndForty = {
  team: {
    id: "<id>",
    name: "<value>",
  },
  configuration: {
    id: "<id>",
  },
  peering: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `team`                                                                                   | [models.UserEventPayload240Team](../models/usereventpayload240team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `configuration`                                                                          | [models.UserEventPayload240Configuration](../models/usereventpayload240configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.PayloadPeering](../models/payloadpeering.md)                                     | :heavy_check_mark:                                                                       | N/A                                                                                      |