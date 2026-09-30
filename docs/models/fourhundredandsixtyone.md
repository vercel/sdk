# FourHundredAndSixtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixtyOne } from "@vercel/sdk/models/fourhundredandtwenty.js";

let value: FourHundredAndSixtyOne = {
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
| `configuration`                                                                          | [models.UserEventPayload461Configuration](../models/usereventpayload461configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.Peering](../models/peering.md)                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload461Team](../models/usereventpayload461team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |