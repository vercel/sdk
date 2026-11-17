# FiveHundredAndFourteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFourteen } from "@vercel/sdk/models/usereventpayload491previous.js";

let value: FiveHundredAndFourteen = {
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
| `configuration`                                                                          | [models.UserEventPayload514Configuration](../models/usereventpayload514configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.Peering](../models/peering.md)                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload514Team](../models/usereventpayload514team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |