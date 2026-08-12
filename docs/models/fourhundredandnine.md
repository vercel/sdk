# FourHundredAndNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNine } from "@vercel/sdk/models/usereventpayload375previous.js";

let value: FourHundredAndNine = {
  team: {
    id: "<id>",
    name: "<value>",
  },
  configuration: {
    id: "<id>",
  },
  peering: {
    id: "<id>",
    accountId: "<id>",
    region: "<value>",
    vpcId: "<id>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `team`                                                                                   | [models.UserEventPayload409Team](../models/usereventpayload409team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `configuration`                                                                          | [models.UserEventPayload409Configuration](../models/usereventpayload409configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.Peering](../models/peering.md)                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |