# FourHundredAndFiftyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftyEight } from "@vercel/sdk/models/fourhundredandsixteen.js";

let value: FourHundredAndFiftyEight = {
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
| `configuration`                                                                          | [models.UserEventPayload458Configuration](../models/usereventpayload458configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.PayloadPeering](../models/payloadpeering.md)                                     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload458Team](../models/usereventpayload458team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |