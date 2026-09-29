# FourHundredAndFiftyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftyEight } from "@vercel/sdk/models/fourhundredandseventeen.js";

let value: FourHundredAndFiftyEight = {
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
| `configuration`                                                                          | [models.UserEventPayload458Configuration](../models/usereventpayload458configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.Peering](../models/peering.md)                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload458Team](../models/usereventpayload458team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |