# FourHundredAndSeventyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeventyFour } from "@vercel/sdk/models/fourhundredandthirtyfour.js";

let value: FourHundredAndSeventyFour = {
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
| `configuration`                                                                          | [models.UserEventPayload474Configuration](../models/usereventpayload474configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.Peering](../models/peering.md)                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload474Team](../models/usereventpayload474team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |