# FourHundredAndFiftyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftyFour } from "@vercel/sdk/models/fourhundredandthirteen.js";

let value: FourHundredAndFiftyFour = {
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
| `configuration`                                                                          | [models.UserEventPayload454Configuration](../models/usereventpayload454configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.Peering](../models/peering.md)                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload454Team](../models/usereventpayload454team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |