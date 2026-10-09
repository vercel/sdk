# FourHundredAndSeventy

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeventy } from "@vercel/sdk/models/fourhundredandtwentynine.js";

let value: FourHundredAndSeventy = {
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
| `configuration`                                                                          | [models.UserEventPayload470Configuration](../models/usereventpayload470configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.Peering](../models/peering.md)                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload470Team](../models/usereventpayload470team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |