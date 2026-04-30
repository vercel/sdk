# ThreeHundredAndNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNine } from "@vercel/sdk/models/environment.js";

let value: ThreeHundredAndNine = {
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
| `team`                                                                                   | [models.UserEventPayload309Team](../models/usereventpayload309team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `configuration`                                                                          | [models.UserEventPayload309Configuration](../models/usereventpayload309configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.PayloadPeering](../models/payloadpeering.md)                                     | :heavy_check_mark:                                                                       | N/A                                                                                      |