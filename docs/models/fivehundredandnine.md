# FiveHundredAndNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndNine } from "@vercel/sdk/models/fourhundredandeightyseven.js";

let value: FiveHundredAndNine = {
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
| `configuration`                                                                          | [models.UserEventPayload509Configuration](../models/usereventpayload509configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.Peering](../models/peering.md)                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload509Team](../models/usereventpayload509team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |