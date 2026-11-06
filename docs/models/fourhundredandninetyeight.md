# FourHundredAndNinetyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNinetyEight } from "@vercel/sdk/models/usereventpayload465actortype.js";

let value: FourHundredAndNinetyEight = {
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
| `configuration`                                                                          | [models.UserEventPayload498Configuration](../models/usereventpayload498configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.Peering](../models/peering.md)                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload498Team](../models/usereventpayload498team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |