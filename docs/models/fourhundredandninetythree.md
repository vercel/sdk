# FourHundredAndNinetyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNinetyThree } from "@vercel/sdk/models/usereventpayload458actortype.js";

let value: FourHundredAndNinetyThree = {
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
| `configuration`                                                                          | [models.UserEventPayload493Configuration](../models/usereventpayload493configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.Peering](../models/peering.md)                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload493Team](../models/usereventpayload493team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |