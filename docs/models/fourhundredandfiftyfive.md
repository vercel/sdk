# FourHundredAndFiftyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftyFive } from "@vercel/sdk/models/fourhundredandfourteen.js";

let value: FourHundredAndFiftyFive = {
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
| `configuration`                                                                          | [models.UserEventPayload455Configuration](../models/usereventpayload455configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.Peering](../models/peering.md)                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload455Team](../models/usereventpayload455team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |