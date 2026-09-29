# FourHundredAndFiftyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftyNine } from "@vercel/sdk/models/fourhundredandseventeen.js";

let value: FourHundredAndFiftyNine = {
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
| `configuration`                                                                          | [models.UserEventPayload459Configuration](../models/usereventpayload459configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.PayloadPeering](../models/payloadpeering.md)                                     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload459Team](../models/usereventpayload459team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |