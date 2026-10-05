# FourHundredAndSixtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixtyTwo } from "@vercel/sdk/models/fourhundredandtwentyone.js";

let value: FourHundredAndSixtyTwo = {
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
| `configuration`                                                                          | [models.UserEventPayload462Configuration](../models/usereventpayload462configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.Peering](../models/peering.md)                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload462Team](../models/usereventpayload462team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |