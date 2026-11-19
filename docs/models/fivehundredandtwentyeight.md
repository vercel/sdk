# FiveHundredAndTwentyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndTwentyEight } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndTwentyEight = {
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
| `configuration`                                                                          | [models.UserEventPayload528Configuration](../models/usereventpayload528configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.PayloadPeering](../models/payloadpeering.md)                                     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload528Team](../models/usereventpayload528team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |