# FiveHundredAndForty

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndForty } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndForty = {
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
| `configuration`                                                                          | [models.UserEventPayload540Configuration](../models/usereventpayload540configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.PayloadPeering](../models/payloadpeering.md)                                     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload540Team](../models/usereventpayload540team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |