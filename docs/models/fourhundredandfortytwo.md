# FourHundredAndFortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortyTwo } from "@vercel/sdk/models/fourhundredandone.js";

let value: FourHundredAndFortyTwo = {
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
| `configuration`                                                                          | [models.UserEventPayload442Configuration](../models/usereventpayload442configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.Peering](../models/peering.md)                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload442Team](../models/usereventpayload442team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |